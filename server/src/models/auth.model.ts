import mongoose from "mongoose";

// TODO: use zod to validate the schema

const authSchema = new mongoose.Schema({
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

export default mongoose.model("Auth", authSchema);
