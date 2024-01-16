import { createContext } from "react";

interface VideosContextProps {
  hello: string;
}

export const VideosContext = createContext<VideosContextProps | undefined>(
  undefined
);
