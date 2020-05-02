import { Schema, Model, model, Document } from 'mongoose';

export interface INonLexicalWord {
  value: string;
  date: Date;
}

export interface INonLexicalWordModel extends INonLexicalWord, Document {
}

const nonLexicalWordSchema = new Schema({
  value: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

export const NonLexicalWordModel: Model<INonLexicalWordModel> = model<INonLexicalWordModel>('NonLexicalWord', nonLexicalWordSchema);
