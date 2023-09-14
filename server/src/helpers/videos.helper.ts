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
    console.log(id);
    const video = await Video.findById(id);

    if (!video) {
      // Si no se encuentra el video, puedes devolver null o lanzar un error personalizado.
      // Aquí se devuelve null como ejemplo.
      return null;
    }

    return video;
  } catch (error) {
    console.log(error);
    throw error; // Lanza el error para que sea manejado en la función controladora.
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
  return fileExists(filePath) ? filePath + ".mp4" : false;
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
    // Utiliza el método adecuado para eliminar todos los documentos de la colección de videos en MongoDB
    await Video.deleteMany({});
  } catch (error) {
    console.error(error);
    throw error; // Lanza el error para que sea manejado en la ruta
  }
};

export const videosActions = {
  getVideosHelper,
  getVideoHelper,
  postVideoHelper,
  playVideoHelper,
  deleteAllVideos,
};
