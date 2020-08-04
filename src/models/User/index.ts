import { Document, model, Schema } from "mongoose";

const userSchema: Schema = new Schema({}, { timestamps: true });

interface IUserDocument {}

export const UserModel = model<IUserDocument & Document>("User", userSchema);
