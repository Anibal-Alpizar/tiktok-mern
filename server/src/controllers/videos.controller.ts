import { Request, Response } from "express";
import { videosActions } from "../helpers/videos.helper";
import { UploadedFile } from "express-fileupload";
import Video from "../models/video.model";

export const getVideos = async (req: Request, res: Response) => {
  try {
    // const videos = await videosActions.getVideosHelper();
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.log(error);
  }
};

export const getVideo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const video = await videosActions.getVideoHelper(id as string);

    if (!video) {
      // Si el video no se encuentra, devuelve un error 404
      res.status(404).json({ error: "Video no encontrado" });
      return;
    }

    res.json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener el video" });
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

export const deleteVideos = async (req: Request, res: Response) => {
  try {
    await videosActions.deleteAllVideos();
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al borrar los videos" });
  }
};
