import { createContext } from "react";
import { File } from "../interfaces/video";

interface VideosContextProps {
  uploadVideo: (file: File) => void;
}

export const VideosContext = createContext<VideosContextProps | undefined>(
  undefined
);
