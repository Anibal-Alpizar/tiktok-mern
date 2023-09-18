import Video from "../models/video.model";
import { getVideoDirectory } from "../utils/videos/videos.util";
import { existsSync } from "fs";

const getVideosHelper = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getVideoHelper = async (id: string) => {
  try {
    console.log(id);
    const video = await Video.findById(id);

    if (!video) {
      return null;
    }

    return video;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const postVideoHelper = async (name: string, tempFilePath: string) => {
  try {
    const newVideo = new Video({
      name,
      tempFilePath,
    });

    await newVideo.save();

    return "video saved";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const playVideoHelper = (videoName: string) => {
  const videoNameWithoutExtension = videoName.replace(".mp4", "");
  const filePath = getVideoDirectory(videoNameWithoutExtension);
  return fileExists(filePath) ? filePath : null;
};


const fileExists = (filePath: string) => {
  try {
    if (existsSync(filePath)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const deleteAllVideos = async () => {
  try {
    await Video.deleteMany({});
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const videosActions = {
  getVideosHelper,
  getVideoHelper,
  postVideoHelper,
  playVideoHelper,
  deleteAllVideos,
};
