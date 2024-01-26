import { createContext } from "react";
import { videosContextProps } from "../interfaces/context/video/videosContextProps";

export const VideosContext = createContext<videosContextProps | undefined>(
  undefined
);
