import Video from "../models/video.model";

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

export const videosActions = {
  getVideosHelper,
  getVideoHelper,
  postVideoHelper,
};
