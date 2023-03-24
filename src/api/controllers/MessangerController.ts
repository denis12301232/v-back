import type { FastifyRequest } from 'fastify'
import type { MessangerTypes } from '@/types'
import { MessangerService } from '@/api/services'
import { Validate } from '@/util'
import { ApiError } from '@/exeptions'


export class MessangerController {
   static async saveMessage(request: FastifyRequest<{ Body: MessangerTypes.SaveMessageBody }>) {
      const _id = request.user._id;
      const { chat_id, text } = request.body;
      const message = await MessangerService.saveMessage({ chat_id, text, author: _id });
      return message;
   }

   static async saveMediaMessage(request: FastifyRequest<{ Querystring: MessangerTypes.SaveMediaMessageQuery }>) {
      const _id = request.user._id;
      const { chat_id, type } = request.query;

      switch (type) {
         case 'image':
            const parts = request.files();
            return await MessangerService.saveImageMessage(chat_id, _id, parts);
         case 'audio':
            const file = await request.file();
            return await MessangerService.saveAudioMessage(chat_id, _id, file);
      }
   }

   static async getUserChats(request: FastifyRequest) {
      const _id = request.user._id;
      const chats = await MessangerService.getUserChats(_id);
      return chats;
   }

   static async openChat(request: FastifyRequest<{ Querystring: MessangerTypes.OpenChatQuery }>) {
      const _id = request.user._id;
      const { chat_id, page, limit } = request.query;
      const messages = await MessangerService.openChat(_id, chat_id, page, limit);
      return messages;
   }

   static async findUsers(request: FastifyRequest<{ Querystring: MessangerTypes.FindUsersQuery }>) {
      const _id = request.user._id;
      const { loginOrName } = request.query;
      const users = await MessangerService.findUsers(loginOrName, _id);
      return users;
   }

   static async createChat(request: FastifyRequest<{ Body: MessangerTypes.CreateChatBody }>) {
      const _id = request.user._id;
      const { users } = request.body;
      const chat = await MessangerService.createChat(_id, users);
      return chat;
   }

   static async createGroup(request: FastifyRequest<{ Querystring: MessangerTypes.CreateGroupQuery }>) {
      const _id = request.user._id;
      const { ['users[]']: users, title, about } = request.query;
      const file = await request.file();
      const group = await MessangerService.createGroup(_id, users, title, about, file);
      return group;
   }

   static async addUserToGroup(request: FastifyRequest<{ Body: MessangerTypes.AddUserToGroupBody }>) {
      const _id = request.user._id;
      const { user_id, chat_id } = request.body;
      const response = await MessangerService.addUserToGroup(_id, chat_id, user_id);
      return response;
   }

   static async removeUserFromGroup(request: FastifyRequest<{ Body: MessangerTypes.RemoveUserFromGroupBody }>) {
      const _id = request.user._id;
      const { user_id, chat_id } = request.body;
      const response = await MessangerService.removeUserFromGroup(_id, chat_id, user_id);
      return response;
   }

   static async getUsersListInChat(request: FastifyRequest<{ Querystring: MessangerTypes.GetUsersListInChatQuery }>) {
      const { chat_id } = request.query;
      const response = await MessangerService.getUsersListInChat(chat_id);
      return response;
   }

   static async deleteChat(request: FastifyRequest<{ Body: MessangerTypes.DeleteChatBody }>) {
      const _id = request.user._id;
      const { chat_id } = request.body;
      const result = await MessangerService.deleteChat(_id, chat_id);
      return result;
   }

   static async updateRead(request: FastifyRequest<{ Body: MessangerTypes.UpdateReadBody }>) {
      const _id = request.user._id;
      const { chat_id } = request.body;
      const updated = await MessangerService.updateRead(chat_id, _id);
      return updated;
   }

   static async updateRolesInGroup(request: FastifyRequest<{ Body: MessangerTypes.UpdateRolesInGroupBody }>) {
      const _id = request.user._id;
      const { group_id, role, users } = request.body;
      const result = await MessangerService.updateRolesInGroup(_id, group_id, role, users);
      return result;
   }

   static async updateGroup(request: FastifyRequest<{ Querystring: MessangerTypes.UpdateGroupQuery }>) {
      const _id = request.user._id;
      const { group_id, title, about } = request.query;
      const data = await request.file();
      if (data) {
         if (!Validate.isValidMime(['image/'])(data.mimetype))
            throw ApiError.BadRequest(400, 'Wrong mime');
      }

      const result = await MessangerService.updateGroup(_id, group_id, data, title, about);
      return result;
   }

   static async getUserChatById(request: FastifyRequest<{ Querystring: MessangerTypes.GetUserChatByIdQuery }>) {
      const _id = request.user._id;
      const { chat_id } = request.query;
      const chat = await MessangerService.getUserChatById(_id, chat_id);
      return chat;
   }
}