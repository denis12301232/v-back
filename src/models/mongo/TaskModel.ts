import type { ITask } from '@/types'
import { Schema, model } from 'mongoose'


const TaskSchema = new Schema<ITask>({
   title: {
      type: String,
      required: true
   },
   tags: {
      type: [String],
      required: true
   },
   status: {
      type: String,
      required: true,
      default: 'Не выбрана'
   },
   subtasks: {
      type: [{
         type: Schema.Types.ObjectId,
         ref: 'Subtask',
      }],
      default: [],
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   }
}, { timestamps: true });

export default model<ITask>('Task', TaskSchema);