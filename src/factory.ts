import type { FastifyInstance } from 'fastify';
import type { ObjectSchema } from 'joi';
import fastifyEnv from '@fastify/env';
import fastifyCors from '@fastify/cors';
import fastifyCookie from '@fastify/cookie';
import fastifyMultipart from '@fastify/multipart';
import fastifyAutoload from '@fastify/autoload';
import fastifyStatic from '@fastify/static';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import apiErrorHandler from '@/exceptions/apiErrorHandler.js';
import Plugins from '@/plugins/Plugins.js';

export default async function factory(app: FastifyInstance) {
  const dirname = fileURLToPath(new URL('.', import.meta.url));

  await app.register(fastifyEnv, {
    schema: { type: 'object' },
    dotenv: { path: `.env`, debug: true },
  });
  app.register(fastifyCors, {
    origin: process.env.CLIENT_DOMAIN.split(' '),
    credentials: true,
    exposedHeaders: ['X-Total-Count'],
  });
  app.register(fastifyCookie, { hook: 'onRequest' });
  app.register(fastifyMultipart, { limits: { fileSize: 100000000, files: 10 } });
  app.register(fastifyAutoload, {
    dir: join(dirname, 'routes'),
    options: { prefix: '/api' },
    forceESM: true,
  });
  app.register(fastifyStatic, { root: resolve(dirname, '../public') });
  app.register(fastifyStatic, {
    root: resolve(dirname, '../static/images/avatars'),
    prefix: '/avatars',
    decorateReply: false,
  });
  app.register(fastifyStatic, {
    root: resolve(dirname, '../static/audio'),
    prefix: '/audio',
    decorateReply: false,
  });
  app.register(fastifyStatic, {
    root: resolve(dirname, '../static/media'),
    prefix: '/media',
    decorateReply: false,
  });
  app.register(Plugins.io, {
    cors: {
      origin: process.env.CLIENT_DOMAIN.split(' '),
      credentials: true,
      exposedHeaders: ['X-Total-Count'],
    },
    path: '/socket',
  });
  app.register(Plugins.mongo, { url: process.env.MONGO_URL, opts: { dbName: process.env.MONGO_NAME } });
  app.register(Plugins.redis, { url: process.env.REDIS_URL });
  app.register(Plugins.staticFolders, [
    '../../static/audio',
    '../../static/images/avatars',
    '../../static/media',
    '../../public',
    '../../static/temp',
  ]);
  app.setValidatorCompiler(
    ({ schema }: { schema: ObjectSchema }) =>
      (data) =>
        schema.validate(data)
  );
  app.setNotFoundHandler((request, reply) => {
    reply.send('index.html');
  });
  app.setErrorHandler(apiErrorHandler);
  await app.ready();
}
