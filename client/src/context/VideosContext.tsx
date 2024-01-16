import { createContext } from "react";
import { File, Video } from "../interfaces/video";

interface VideosContextProps {
  uploadVideo: (file: File) => void;
  loadVideos: () => void;
  videos: Video[];
}

export const VideosContext = createContext<VideosContextProps | undefined>(
  undefined
);
