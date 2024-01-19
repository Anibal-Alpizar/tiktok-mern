import Video from "../models/video.model";

const getVideosHelper = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const postVideoHelper = async (
  name: string,
  tempFilePath: string,
  description: string
) => {
  try {
    const newVideo = new Video({
      name,
      tempFilePath,
      description,
    });

    await newVideo.save();

    return "video saved";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteAllVideos = async () => {
  try {
    await Video.deleteMany({});
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const videosActions = {
  getVideosHelper,
  postVideoHelper,
  deleteAllVideos,
};
