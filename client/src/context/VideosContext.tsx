import { createContext } from "react";
import { file, video } from "../interfaces/video/videoProps";

interface VideosContextProps {
  uploadVideo: (file: file, description: string) => void;
  loadVideos: () => void;
  videos: video[];
}

export const VideosContext = createContext<VideosContextProps | undefined>(
  undefined
);
