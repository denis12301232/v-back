import type { FastifyPluginCallback } from 'fastify';
import mongoose from 'mongoose';
import { useCreateRoot } from '@/hooks/index.js';

interface MongoConfig {
  url: string;
  opts: mongoose.ConnectOptions;
}

const mongoDbPlugin: FastifyPluginCallback<MongoConfig> = async (app, { url, opts }, done) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(url, opts);
    app.log.info(`Connected to db '${process.env.MONGO_NAME}' at ${process.env.MONGO_URL}`);
    app.addHook('onClose', (app, done) => mongoose.disconnect().finally(done));
    await useCreateRoot();
    done();
  } catch (e) {
    if (e instanceof Error) {
      app.log.error(e);
      done(e);
      app.close();
    }
  }
};

export default mongoDbPlugin;
