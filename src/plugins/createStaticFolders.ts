import type { FastifyPluginCallback } from 'fastify'
import { access, constants, mkdir } from 'fs/promises'
import { resolve } from 'path'


const createStaticFolders: FastifyPluginCallback<any> = async (fastify, options, done) => {
   await access(resolve(__dirname, '../../static/audio'), constants.R_OK | constants.W_OK)
      .catch(async (e) => await mkdir(resolve(__dirname, '../../static/audio'), { recursive: true }));
   await access(resolve(__dirname, '../../static/images/avatars'), constants.R_OK | constants.W_OK)
      .catch(async (e) => await mkdir(resolve(__dirname, '../../static/images/avatars'), { recursive: true }));
   done();
};

export default createStaticFolders;