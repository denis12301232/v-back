import type { AssistanceTypes, Entries, IAssistance, Langs } from '@/types/index.js';
import type { FilterQuery } from 'mongoose';
import type { MultipartFile } from '@fastify/multipart';
import { google } from 'googleapis';
import Models from '@/models/mongo/index.js';
import ApiError from '@/exceptions/ApiError.js';
import { locales } from '@/i18n/index.js';
import Excel from 'exceljs';
import { Readable } from 'stream';
import { parse } from 'csv-parse';
import AssistanceSchemas from '@/api/schemas/AssistanceSchemas.js';
import Util from '@/util/Util.js';

export default class AssistanceService {
  static async saveForm(form: IAssistance) {
    const saved = await Models.Assistance.create(form);
    return saved;
  }

  static async getForms({ limit, page, sort, descending }: AssistanceTypes.GetForms['Querystring']) {
    const skip = (page - 1) * limit;
    const [forms, total] = await Promise.all([
      Models.Assistance.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        .sort({ [sort]: descending ? -1 : 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Models.Assistance.count(),
    ]);
    return { forms, total };
  }

  static async findForms(nameOrSurname: string, limit: number, page: number) {
    const skip = (page - 1) * limit;
    const query: FilterQuery<IAssistance> = {
      $or: [{ name: { $regex: nameOrSurname, $options: 'i' } }, { surname: { $regex: nameOrSurname, $options: 'i' } }],
    };
    const [forms, count] = await Promise.all([
      Models.Assistance.find(query, { __v: 0, createdAt: 0, updatedAt: 0 }).skip(skip).limit(limit).lean(),
      Models.Assistance.count(query),
    ]);

    return { forms, count };
  }

  static async deleteForms(ids: string[]) {
    const deleteResult = await Models.Assistance.deleteMany({ _id: { $in: ids } }).lean();
    return deleteResult;
  }

  static async modifyForm(id: string, form: IAssistance) {
    const updateResult = await Models.Assistance.updateOne({ _id: id }, { $set: form }, { runValidators: true }).lean();
    return updateResult;
  }

  static async getFormById(id: string) {
    const form = await Models.Assistance.findById(id, { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }).lean();
    return form;
  }

  static async saveFormsToSheet({ locale, filters }: AssistanceTypes.SaveFormsToSheets['Body']) {
    const googleApi = await Models.Tools.findOne({ api: 'google' }).lean();

    if (!googleApi) {
      throw ApiError.BadRequest(400, 'Integration not set');
    }

    const conditions: { [name: string]: FilterQuery<IAssistance> } = {
      disrtict: filters.district ? { district: filters.district } : {},
      street: filters.street ? { street: filters.street } : {},
      birth:
        filters.birth?.from && filters.birth?.to
          ? {
              $expr: {
                $function: {
                  body: `${function (birth: string, filters: AssistanceTypes.SaveFormsToSheets['Body']['filters']) {
                    return +birth.split('/')[0] >= +filters.birth.from && +birth.split('/')[0] <= +filters.birth.to;
                  }}`,
                  args: ['$birth', filters],
                  lang: 'js',
                },
              },
            }
          : {},
    };
    const forms = await Models.Assistance.find({ $and: Object.values(conditions) }).lean();

    if (!forms.length) {
      throw ApiError.NotFound();
    }

    const allFields = Object.entries(locales[locale].assistance.fields) as Entries<
      (typeof locales)['en']['assistance']['fields']
    >;
    const head = allFields.map((item) => item[1]);
    const rows = [head];

    for (const item of forms) {
      const row = allFields.map(([key]) => {
        if (key === 'district') {
          return locales[locale].assistance.districts[item[key]];
        } else if (key === 'street') {
          return locales[locale].assistance.streets[item.district][item[key]];
        } else if (Array.isArray(item[key])) {
          return (item[key] as string[])?.join(',');
        } else if (typeof item[key] === 'boolean') {
          return item[key]
            ? locales[locale].assistance.checkboxes.yesNo.yes
            : locales[locale].assistance.checkboxes.yesNo.no;
        } else {
          return item[key];
        }
      });
      rows.push(row);
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: googleApi.settings.serviceUser as string,
        private_key: googleApi.settings.servicePrivateKey as string,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheetsService = google.sheets({ version: 'v4', auth });
    const metaData = await sheetsService.spreadsheets.get({
      spreadsheetId: googleApi.settings.sheetId as string,
    });
    const listTitle = metaData.data.sheets?.at(0)?.properties?.title;

    await sheetsService.spreadsheets.values.clear({
      spreadsheetId: googleApi.settings.sheetId as string,
      range: `${listTitle}!A:Y`,
    });

    await sheetsService.spreadsheets.values.append({
      spreadsheetId: googleApi.settings.sheetId as string,
      range: `${listTitle}!A:Y`,
      valueInputOption: 'RAW',
      requestBody: {
        values: rows,
      },
    });
    return {
      message: 'Successfully formed',
      link: `https://docs.google.com/spreadsheets/d/${googleApi.settings.sheetId}`,
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

  static async createReport({ type, locale, filters }: AssistanceTypes.CreateReport['Body']) {
    const allFields = Object.entries(locales[locale].assistance.fields) as Entries<
      (typeof locales)['en']['assistance']['fields']
    >;
    const conditions: { [name: string]: FilterQuery<IAssistance> } = {
      disrtict: filters.district ? { district: filters.district } : {},
      street: filters.street ? { street: filters.street } : {},
      birth:
        filters.birth?.from && filters.birth?.to
          ? {
              $expr: {
                $function: {
                  body: `${function (birth: string, filters: AssistanceTypes.CreateReport['Body']['filters']) {
                    return +birth.split('/')[0] >= +filters.birth.from && +birth.split('/')[0] <= +filters.birth.to;
                  }}`,
                  args: ['$birth', filters],
                  lang: 'js',
                },
              },
            }
          : {},
    };
    const forms = await Models.Assistance.find({ $and: Object.values(conditions) }).lean();
    if (!forms.length) {
      throw ApiError.NotFound();
    }
    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet('Assistance');
    sheet.columns = allFields.map(([key, value]) => ({ header: value, key, width: 10 }));
    for (const item of forms) {
      const sheetObj = allFields.reduce((obj, [key]) => {
        if (key === 'district') {
          obj[key] = locales[locale].assistance.districts[item[key]];
        } else if (key === 'street') {
          obj[key] = locales[locale].assistance.streets[item.district][item[key]];
        } else if (Array.isArray(item[key])) {
          obj[key] = (item[key] as string[])?.join(',');
        } else if (typeof item[key] === 'boolean') {
          obj[key] = item[key]
            ? locales[locale].assistance.checkboxes.yesNo.yes
            : locales[locale].assistance.checkboxes.yesNo.no;
        } else {
          obj[key] = item[key];
        }
        return obj;
      }, {});
      sheet.addRow(sheetObj);
    }
    const buffer = type === 'xlsx' ? await workbook.xlsx.writeBuffer() : await workbook.csv.writeBuffer();
    return Readable.from(Buffer.from(buffer));
  }

  static async uploadListCSV(data: MultipartFile, locale: Langs) {
    const parser = data.file.pipe(parse({ delimiter: ';' }));
    const errors: { message: string; row: number }[] = [];
    const forms: { [key in keyof Omit<IAssistance, '_id' | 'createdAt' | 'updatedAt'>]: unknown }[] = [];
    let index = 0;

    for await (const record of parser) {
      index++;
      const column = Object.keys(locales.en.assistance.fields) as Array<
        keyof Omit<IAssistance, '_id' | 'createdAt' | 'updatedAt'>
      >;
      const row: string[] = record;
      const result = column.reduce((form, item, index) => {
        if (item === 'people_fio' || item === 'kids_age') {
          form[item] = row[index] ? row[index].split(',') : undefined;
        } else if (item === 'district') {
          form[item] = Util.getKeyByValue(locales[locale].assistance.districts, row[index]);
        } else if (item === 'street') {
          form.district
            ? (form[item] = Util.getKeyByValue(locales[locale].assistance.streets[form.district as string], row[index]))
            : (form[item] = undefined);
        } else if (
          item === 'invalids' ||
          item === 'kids' ||
          item === 'food' ||
          item === 'water' ||
          item === 'hygiene' ||
          item === 'medicines' ||
          item === 'pampers' ||
          item === 'pers_data_agreement' ||
          item === 'photo_agreement'
        ) {
          form[item] =
            Util.getKeyByValue(locales[locale].assistance.checkboxes.yesNo, row[index]) === 'yes' ? true : false;
        } else {
          form[item] = row[index] ? row[index] : undefined;
        }
        return form;
      }, {} as { [key in keyof Omit<IAssistance, '_id'>]: unknown });
      const { error } = AssistanceSchemas.saveFormBody.validate(result);

      if (error) {
        errors.push({ message: 'Error in row', row: index });
      } else {
        forms.push(result);
      }
      await new Promise((resolve) => resolve(true));
    }

    const created = await Promise.all(forms.map((form) => Models.Assistance.create(form)));
    return { created: created.length, errors };
  }
}
