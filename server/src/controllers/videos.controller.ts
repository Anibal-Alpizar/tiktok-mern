import { Request, Response } from "express";
import { videosActions } from "../helpers/videos.helper";
import { UploadedFile } from "express-fileupload";

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await videosActions.getVideosHelper();
    res.json(videos);
  } catch (error) {
    console.log(error);
  }
};
export const getVideo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const video = await videosActions.getVideoHelper(id as string);
    res.json(video);
  } catch (error) {
    console.log(error);
  }
};

export const postVideo = async (req: Request, res: Response) => {
  try {
    const { name, tempFilePath } = req.files!.file as UploadedFile;

    await videosActions.postVideoHelper(name, tempFilePath);

    res.send("video saved");
  } catch (error) {
    console.log(error);
  }
};

export const playVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const video = videosActions.playVideoHelper(id);
    res.json(video);
  } catch (error) {
    console.log(error);
  }
};
