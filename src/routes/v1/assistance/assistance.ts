import type { FastifyInstance } from 'fastify';
import AssistanceController from '@/api/controllers/AssistanceController.js';
import AssistanceSchemas from '@/api/schemas/AssistanceSchemas.js';
import { useAuthGuard, useRoleGuard } from '@/hooks/index.js';

export default async function AssistanceRoutes(app: FastifyInstance) {
  app.post('/', { schema: { body: AssistanceSchemas.saveFormBody } }, AssistanceController.saveForm);
  app.get('/forms', { schema: { querystring: AssistanceSchemas.getFormsQuery } }, AssistanceController.getForms);
  app.get(
    '/',
    {
      onRequest: [useAuthGuard, useRoleGuard(['admin'])],
      schema: { querystring: AssistanceSchemas.findFormsQuery },
    },
    AssistanceController.findForms
  );
  app.delete(
    '/forms',
    {
      onRequest: [useAuthGuard, useRoleGuard(['admin'])],
      schema: { body: AssistanceSchemas.deleteFormsBody },
    },
    AssistanceController.deleteForms
  );
  app.patch(
    '/',
    {
      onRequest: [useAuthGuard, useRoleGuard(['admin'])],
      schema: { body: AssistanceSchemas.modifyFormBody },
    },
    AssistanceController.modifyForm
  );
  app.get(
    '/id',
    {
      onRequest: [useAuthGuard, useRoleGuard(['admin'])],
      schema: { querystring: AssistanceSchemas.getFormByIdQuery },
    },
    AssistanceController.getFormById
  );
  app.post(
    '/sheet',
    {
      onRequest: [useAuthGuard, useRoleGuard(['admin'])],
      schema: { body: AssistanceSchemas.saveFormsToGoogleSheetsBody },
    },
    AssistanceController.saveFormsToGoogleSheets
  );
  app.get(
    '/stats',
    {
      onRequest: [useAuthGuard, useRoleGuard(['admin'])],
      schema: { querystring: AssistanceSchemas.getStatsQuery },
    },
    AssistanceController.getStats
  );

  app.post(
    '/report',
    { onRequest: [useAuthGuard, useRoleGuard(['admin'])], schema: { body: AssistanceSchemas.createReportBody } },
    AssistanceController.getReport
  );

  app.post(
    '/list',
    {
      // onRequest: [useAuthGuard]
    },
    AssistanceController.uploadListCSV
  );
}
