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

export const getVideo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const video = await videosActions.getVideoHelper(id as string);

    if (!video) {
      res.status(404).json({ error: "Video not found" });
      return;
    }
    res.status(200).json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while getting video" });
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

// TODO: status code
export const playVideo = async (req: Request, res: Response) => {
  const { filename } = req.params;
  console.log(filename);
  try {
    const videoPath = videosActions.playVideoHelper(filename);

    if (videoPath) {
      res.sendFile(videoPath, { headers: { "Content-Type": "video/mp4" } });
    } else {
      res.status(404).json({ error: "Video not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
