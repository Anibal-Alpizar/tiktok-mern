import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IAuth, IAuthModel } from "../interfaces/auth.interfaces";

// TODO: use zod to validate the schema
const authSchema = new mongoose.Schema<IAuth, IAuthModel>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

authSchema.statics.encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

authSchema.statics.comparePassword = async (
  password: string,
  receivedPassword: string
) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default mongoose.model<IAuth, IAuthModel>("Auth", authSchema);
