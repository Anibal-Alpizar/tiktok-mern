import { createContext } from "react";
import { File, Video } from "../interfaces/video";

interface VideosContextProps {
  uploadVideo: (file: File, description: string) => void;
  loadVideos: () => void;
  videos: Video[];
}

export const VideosContext = createContext<VideosContextProps | undefined>(
  undefined
);
