import Video from "../models/video.model";
import { getVideoDirectory } from "../utils/videos/videos.util";
import path from "path";
import { existsSync } from "fs";

const getVideosHelper = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (error) {
    console.log(error);
  }
};

const getVideoHelper = async (id: string) => {
  try {
    const video = await Video.findById(id);
    return video;
  } catch (error) {
    console.log(error);
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
  }
};

const playVideoHelper = (videoName: string) => {
  const filePath = getVideoDirectory(videoName);
  return fileExists(filePath) ? filePath + '.mp4' : false;
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

export const videosActions = {
  getVideosHelper,
  getVideoHelper,
  postVideoHelper,
  playVideoHelper,
};
