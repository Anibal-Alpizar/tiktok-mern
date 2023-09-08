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

export const postVideo = async (req: Request, res: Response) => {
  try {
    const { name, tempFilePath } = req.files!.file as UploadedFile;

    await videosActions.postVideoHelper(name, tempFilePath);

    res.send("video saved");
  } catch (error) {
    console.log(error);
  }
};
