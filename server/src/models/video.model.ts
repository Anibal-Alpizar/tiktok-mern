import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  video: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Video", videoSchema);
