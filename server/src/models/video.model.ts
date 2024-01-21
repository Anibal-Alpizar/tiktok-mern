import mongoose from "mongoose";

// TODO: use zod to validate the schema

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  tempFilePath: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Video", videoSchema);
