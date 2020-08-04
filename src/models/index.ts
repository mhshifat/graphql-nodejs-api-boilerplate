import { UserModel } from "./User";

export const models = {
  User: UserModel,
};

export type ModelsType = typeof models;
