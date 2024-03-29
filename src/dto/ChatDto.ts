import type { IMessage, IUser, IGroup } from '@/types/index.js';

export default class ChatDto {
  readonly _id: string;
  readonly messages: IMessage[];
  readonly users: IUser[];
  readonly total: number;
  readonly updatedAt: NativeDate;
  readonly createdAt: NativeDate;
  readonly type: 'group' | 'dialog';
  readonly companion?: IUser;
  readonly unread: number;
  readonly members_count: number | undefined;
  readonly group: IGroup | undefined;
  readonly typing: object;

  constructor(model: any, userId: string) {
    this._id = String(model._id);
    this.messages = model.messages.length ? ([model.messages.at(-1)] as IMessage[]) : ([] as IMessage[]);
    this.users = model.users;
    this.total = model.messages.length;
    this.updatedAt = model.updatedAt;
    this.createdAt = model.createdAt;
    this.type = model.type;
    this.companion =
      this.type === 'dialog' ? model.users.find((user: IUser) => user._id.toString() !== userId) : undefined;
    this.unread = model.messages.reduce((sum: number, msg: IMessage) => {
      return msg.read.find((_id) => String(_id) === userId) ? sum : ++sum;
    }, 0);
    this.members_count = this.type === 'group' ? model.users.length - model.deleted.length : undefined;
    this.group = model.group;
    this.typing = {};
  }
}
