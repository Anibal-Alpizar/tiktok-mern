import { Request, Response } from "express";
import { videosActions } from "../helpers/videos.helper";
import { UploadedFile } from "express-fileupload";

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await videosActions.getVideosHelper();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Error while getting videos" });
  }
};

export const postVideo = async (req: Request, res: Response) => {
  try {
    const { name, tempFilePath } = req.files!.file as UploadedFile;

    await videosActions.postVideoHelper(name, tempFilePath);

    res.status(200).json({ message: "Video uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error while uploading video" });
  }
};

export const deleteVideos = async (req: Request, res: Response) => {
  try {
    await videosActions.deleteAllVideos();
    res.status(200).json({ message: "Videos deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error while deleting videos" });
  }
};
