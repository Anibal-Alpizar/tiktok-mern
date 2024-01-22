import { Model } from "mongoose";

export interface IAuth {
  name: string;
  email: string;
  password: string;
}

export interface IAuthModel extends Model<IAuth> {
  encryptPassword(password: string): Promise<string>;
}
