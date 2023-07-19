import type { AssistanceTypes, IAssistance } from '@/types/index.js';
import Joi from 'joi';
import { Validate } from '@/util/index.js';

export default class AssistanceSchemas {
  static readonly saveForm = {
    body: Joi.object<IAssistance>()
      .keys({
        name: Joi.string().required().max(100),
        surname: Joi.string().required().max(100),
        patronymic: Joi.string().required().max(100),
        phone: Joi.string()
          .length(10)
          .pattern(/^[0-9]+$/)
          .required(),
        birth: Joi.string()
          .required()
          .custom((value: string, helper) => {
            return Validate.isYYYYMMDD(value) ? value : helper.error('any.invalid');
          }),
        district: Joi.number().required().valid(1, 2, 3, 4, 5, 6, 7, 8, 9),
        street: Joi.string().required().max(50),
        house: Joi.string().required().max(50),
        flat: Joi.string().max(50).pattern(/^\d+$/).required(),
        people_num: Joi.number().min(1).max(10).required(),
        people_fio: Joi.array().items(Joi.string().max(100)).empty(Joi.array().length(0)),
        invalids: Joi.boolean(),
        kids: Joi.boolean(),
        kids_age: Joi.array().items(Joi.string().valid('0-1', '1-3', '3-9', '9-18')).empty(Joi.array().length(0)),
        food: Joi.boolean(),
        water: Joi.boolean(),
        medicines: Joi.boolean(),
        medicines_info: Joi.string().max(500).allow('', null),
        hygiene: Joi.boolean(),
        hygiene_info: Joi.string().max(500).allow('', null),
        pampers: Joi.boolean(),
        pampers_info: Joi.string().max(500).allow('', null),
        diet: Joi.string().max(500).allow('', null),
        pers_data_agreement: Joi.boolean().required().valid(true),
        photo_agreement: Joi.boolean().required().valid(true),
        sector: Joi.string(),
      })
      .required(),
  };

  static readonly findForms = {
    querystring: Joi.object<AssistanceTypes.FindForms['Querystring']>()
      .keys({
        nameOrSurname: Joi.string().required(),
        limit: Joi.number().required().min(1).max(100),
        page: Joi.number().required(),
      })
      .required(),
  };

  static readonly getForms = {
    querystring: Joi.object<AssistanceTypes.GetForms['Querystring']>()
      .keys({
        limit: Joi.number().required(),
        page: Joi.number().required(),
        sort: Joi.string().required(),
        descending: Joi.boolean().required(),
      })
      .required(),
  };

  static readonly deleteForms = {
    body: Joi.array<AssistanceTypes.DeleteForms['Body']>().required().items(Joi.string()),
  };

  static readonly modifyForm = {
    body: Joi.object<AssistanceTypes.ModifyForm['Body']>()
      .keys({
        id: Joi.string().required(),
        form: Joi.object()
          .keys({
            _id: Joi.string(),
            name: Joi.string().required().max(100),
            surname: Joi.string().required().max(100),
            patronymic: Joi.string().required().max(100),
            phone: Joi.string()
              .length(10)
              .pattern(/^[0-9]+$/)
              .required(),
            birth: Joi.string()
              .required()
              .custom((value: string, helper) => {
                return Validate.isYYYYMMDD(value) ? value : helper.error('any.invalid');
              }),
            district: Joi.number().required().valid(1, 2, 3, 4, 5, 6, 7, 8, 9),
            street: Joi.string().required().max(50),
            house: Joi.string().required().max(50),
            flat: Joi.number().required(),
            people_num: Joi.number().min(1).max(10).required(),
            people_fio: Joi.array().items(Joi.string().max(100)).empty(Joi.array().length(0)),
            invalids: Joi.boolean(),
            kids: Joi.boolean(),
            kids_age: Joi.array().items(Joi.string().valid('0-1', '1-3', '3-9', '9-18')).empty(Joi.array().length(0)),
            food: Joi.boolean(),
            water: Joi.boolean(),
            medicines: Joi.boolean(),
            medicines_info: Joi.string().max(500).allow('', null),
            hygiene: Joi.boolean(),
            hygiene_info: Joi.string().max(500).allow('', null),
            pampers: Joi.boolean(),
            pampers_info: Joi.string().max(500).allow('', null),
            diet: Joi.string().max(500).allow('', null),
            pers_data_agreement: Joi.boolean().required().valid(true),
            photo_agreement: Joi.boolean().required().valid(true),
            sector: Joi.string(),
          })
          .required(),
      })
      .required(),
  };

  static readonly getFormById = {
    querystring: Joi.object<AssistanceTypes.GetFormById['Querystring']>()
      .keys({
        id: Joi.string().required(),
      })
      .required(),
  };

  static readonly saveFormsToGoogleSheets = {
    body: Joi.object<AssistanceTypes.SaveFormsToSheets['Body']>()
      .keys({
        locale: Joi.string().required().valid('ru', 'uk', 'en'),
        filters: Joi.object<AssistanceTypes.SaveFormsToSheets['Body']['filters']>({
          district: Joi.number().allow('').valid(1, 2, 3, 4, 5, 6, 7, 8, 9),
          birth: Joi.object<{ from: string; to: string }>().keys({
            from: Joi.number().required().min(1920).max(2022),
            to: Joi.number().required().min(1920).max(2022),
          }),
          street: Joi.string().allow(''),
        }),
      })
      .required(),
  };

  static readonly getStats = {
    querystring: Joi.object<AssistanceTypes.GetStats['Querystring']>({
      by: Joi.string().required().valid('month', 'year'),
      timestamp: Joi.number().required(),
    }).required(),
  };

  static readonly createReport = {
    body: Joi.object<AssistanceTypes.CreateReport['Body']>()
      .keys({
        locale: Joi.string().required().valid('ru', 'uk', 'en'),
        type: Joi.string().required().valid('xlsx', 'csv'),
        filters: Joi.object<AssistanceTypes.SaveFormsToSheets['Body']['filters']>({
          district: Joi.number().allow('').valid(1, 2, 3, 4, 5, 6, 7, 8, 9),
          birth: Joi.object<{ from: string; to: string }>().keys({
            from: Joi.number().required().min(1920).max(2022),
            to: Joi.number().required().min(1920).max(2022),
          }),
          street: Joi.string().allow(''),
        }),
      })
      .required(),
  };
}
