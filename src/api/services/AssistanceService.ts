import type { AssistanceTypes, Entries, IAssistance } from '@/types/index.js';
import type { FilterQuery } from 'mongoose';
import type { MultipartFile } from '@fastify/multipart';
import Models from '@/models/mongo/index.js';
import ApiError from '@/exceptions/ApiError.js';
import Excel from 'exceljs';
import { Readable } from 'stream';
import AssistanceSchemas from '@/api/schemas/AssistanceSchemas.js';
import Util from '@/util/Util.js';
import { GoogleService } from '@/api/services/index.js';
import { jsPDF } from 'jspdf';
import useI18n from '@/hooks/useI18n.js';

export default class AssistanceService {
  static async store(form: IAssistance) {
    const saved = await Models.Assistance.create(form);
    return saved;
  }

  static async catch({ limit, page, sort, descending, filter }: AssistanceTypes.Catch['Body']) {
    const conditions: FilterQuery<IAssistance[]> = [
      filter?.nameOrSurname
        ? {
            $or: [
              { name: { $regex: filter.nameOrSurname, $options: 'i' } },
              { surname: { $regex: filter.nameOrSurname, $options: 'i' } },
            ],
          }
        : {},
      filter?.district ? { district: filter.district } : {},
      filter?.street ? { street: filter.street } : {},
      filter?.sector ? { sector: filter.sector } : {},
      filter?.birth?.min && filter?.birth.max
        ? {
            $expr: {
              $function: {
                body: `${function (birth: string, filter: AssistanceTypes.Catch['Body']['filter']) {
                  return (
                    +birth.split('/')[0] >= Number(filter?.birth?.min) &&
                    +birth.split('/')[0] <= Number(filter?.birth?.max)
                  );
                }}`,
                args: ['$birth', filter],
                lang: 'js',
              },
            },
          }
        : {},
    ];

    const skip = (page - 1) * limit;
    const [forms, total] = await Promise.all([
      Models.Assistance.find({ $and: conditions }, { __v: 0, createdAt: 0, updatedAt: 0 })
        .sort({ [sort]: descending ? -1 : 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Models.Assistance.find({ $and: conditions }).count().lean(),
    ]);
    return { forms, total };
  }

  static async destroy(ids: string[]) {
    const result = await Models.Assistance.deleteMany({ _id: { $in: ids } }).lean();
    return result;
  }

  static async update(_id: string, form: AssistanceTypes.Update['Body']) {
    const updateResult = await Models.Assistance.updateOne({ _id }, { $set: form }, { runValidators: true }).lean();
    return updateResult;
  }

  static async show(id: string) {
    const form = await Models.Assistance.findById(id, { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }).lean();
    return form;
  }

  static async saveFormsToSheet(locale: string, { ids }: AssistanceTypes.SaveFormsToSheets['Body']) {
    const { i18n, locales } = useI18n();
    const [googleApi, forms] = await Promise.all([
      Models.Tools.findOne({ api: 'google' }).lean(),
      Models.Assistance.find({ _id: { $in: ids } }).lean(),
    ]);

    if (!googleApi) {
      throw ApiError.BadRequest(400, 'Integration not set');
    }

    if (!forms.length) {
      throw ApiError.NotFound();
    }

    const fields = Object.entries(locales[locale].assistance.fields) as Entries<
      (typeof locales)['en']['assistance']['fields']
    >;
    const rows = [fields.map((item) => item[1])];

    for (const item of forms) {
      const row = fields.map<string>(([key]: [string, unknown]) => {
        if (key === 'district') {
          return i18n.t(`districts.${item[key]}`);
        } else if (key === 'street') {
          return i18n.t(`streets.${item.district}.${item[key]}`);
        } else if (Array.isArray(item[key])) {
          return (item[key] as string[])?.join(',');
        } else if (typeof item[key] === 'boolean') {
          return item[key] ? i18n.t('assistance.checkboxes.yesNo.0') : i18n.t('assistance.checkboxes.yesNo.0');
        } else {
          return item[key];
        }
      });
      rows.push(row);
    }
    const auth = await GoogleService.auth(['https://www.googleapis.com/auth/spreadsheets']);
    const sheetsService = GoogleService.sheets(auth);
    const metaData = await sheetsService.spreadsheets.get({
      spreadsheetId: googleApi.settings.sheetId as string,
    });
    const listTitle = metaData.data.sheets?.at(0)?.properties?.title;

    await sheetsService.spreadsheets.values.clear({
      spreadsheetId: googleApi.settings.sheetId as string,
      range: `${listTitle}!A:Z`,
    });

    await sheetsService.spreadsheets.values.append({
      spreadsheetId: googleApi.settings.sheetId as string,
      range: `${listTitle}!A:Y`,
      valueInputOption: 'RAW',
      requestBody: { values: rows },
    });
    return {
      message: 'Successfully formed',
      link: GoogleService.sheetUrl(`${googleApi.settings.sheetId}`),
    };
  }

  static async getStats(filters: AssistanceTypes.GetStats['Querystring']) {
    const date = new Date(filters.timestamp);
    const list = new Map();

    if (filters.by === 'month') {
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const forms = await Models.Assistance.find(
        {
          createdAt: {
            $gte: new Date(date.getFullYear(), date.getMonth(), 1),
            $lte: new Date(date.getFullYear(), date.getMonth(), lastDay),
          },
        },
        { createdAt: 1 }
      );
      for (let i = 1; i <= lastDay; i++) {
        list.set(i, 0);
      }

      for (const form of forms) {
        const formDate = new Date(form.createdAt);
        list.set(formDate.getDate(), list.get(formDate.getDate()) + 1);
      }
    } else if (filters.by === 'year') {
      const forms = await Models.Assistance.find(
        {
          createdAt: {
            $gte: new Date(date.getFullYear(), 0),
            $lte: new Date(date.getFullYear(), 11),
          },
        },
        { createdAt: 1 }
      );

      for (let i = 0; i <= 11; i++) {
        list.set(i, 0);
      }

      for (const form of forms) {
        const formDate = new Date(form.createdAt);
        list.set(formDate.getMonth(), list.get(formDate.getMonth()) + 1);
      }
    }

    return Object.fromEntries(list.entries());
  }

  static async createStatsPdf(data: MultipartFile) {
    const buffer = await data.toBuffer();
    const u8 = new Uint8Array(buffer);
    const pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text('Chart', 110, 15, { align: 'center' });
    pdf.addImage(u8, 'PNG', 15, 20, 180, 120);

    return Readable.from(Buffer.from(pdf.output('arraybuffer')));
  }

  static async createReport(locale: string, { type, ids }: AssistanceTypes.CreateReport['Body']) {
    const { i18n, locales } = useI18n();
    const forms = await Models.Assistance.find({ _id: { $in: ids } }).lean();
    const allFields = Object.entries(locales[locale].assistance.fields) as Entries<
      (typeof locales)['en']['assistance']['fields']
    >;

    if (!forms.length) {
      throw ApiError.NotFound();
    }

    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet('Assistance');
    sheet.columns = allFields.map(([key, value]) => ({ header: value, key, width: 10 }));
    for (const item of forms) {
      const obj: object = {};
      for (const [key] of allFields) {
        if (key === 'district') {
          obj[key] = i18n.t(`districts.${item[key]}`);
        } else if (key === 'street') {
          obj[key] = i18n.t(`streets.${item.district}.${item[key]}`);
        } else if (Array.isArray(item[key])) {
          obj[key] = (item[key] as string[])?.join(',');
        } else if (typeof item[key] === 'boolean') {
          obj[key] = item[key] ? i18n.t('assistance.checkboxes.yesNo.0') : i18n.t('assistance.checkboxes.yesNo.1');
        } else {
          obj[key] = item[key];
        }
      }
      sheet.addRow(obj);
    }
    const buffer = type === 'xlsx' ? await workbook.xlsx.writeBuffer() : await workbook.csv.writeBuffer();
    return Readable.from(Buffer.from(buffer));
  }

  static async uploadListCSV(locale: string, data: MultipartFile) {
    const { locales } = useI18n();
    const column = Object.keys(locales[locale].assistance.fields) as Array<
      keyof Omit<IAssistance, '_id' | 'createdAt' | 'updatedAt'>
    >;
    const forms: { [key in keyof Omit<IAssistance, '_id' | 'createdAt' | 'updatedAt'>]: unknown }[] = [];
    const errors: { message: string; row: number }[] = [];
    const workbook = new Excel.Workbook();
    const sheet = await workbook.csv.read(data.file, {
      parserOptions: { delimiter: ';', skipLines: 1 },
      map(value) {
        return value;
      },
    });

    sheet.eachRow(onEachRow);
    const created = await Promise.all(forms.map((form) => Models.Assistance.create(form)));

    function onEachRow(row: Excel.Row, number: number) {
      const values = row.model?.cells?.map((cell) => String(cell.value)) || [];
      const form = column.reduce((form, item, index) => {
        if (item === 'peopleFio' || item === 'kidsAge') {
          form[item] = values[index] ? values[index].split(',') : undefined;
        } else if (item === 'district') {
          form[item] = Util.getKeyByValue(locales[locale].districts, values[index]);
        } else if (item === 'street') {
          form.district
            ? (form[item] = Util.getKeyByValue(locales[locale].streets[form.district as string], values[index]))
            : (form[item] = undefined);
        } else if (
          item === 'invalids' ||
          item === 'kids' ||
          item === 'food' ||
          item === 'water' ||
          item === 'hygiene' ||
          item === 'medicines' ||
          item === 'pampers' ||
          item === 'personalDataAgreement' ||
          item === 'photoAgreement'
        ) {
          form[item] =
            Util.getKeyByValue(locales[locale].assistance.checkboxes.yesNo, values[index]) === 'yes' ? true : false;
        } else {
          form[item] = values[index] ? values[index] : undefined;
        }
        return form;
      }, {} as { [key in keyof Omit<IAssistance, '_id'>]: unknown });

      const { error } = AssistanceSchemas.store.body.validate(form);

      if (error) {
        errors.push({ message: 'Error in row', row: number });
      } else {
        forms.push(form);
      }
    }

    return { created: created.length, errors };
  }
}
