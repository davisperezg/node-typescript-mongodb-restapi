import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
}

const useSchema = new Schema({
  email: {
    type: String,
    unique: true,
    requerid: true,
    lowercase: true,
    trim: true,
  },
});

export default model<IUser>("User", useSchema);
