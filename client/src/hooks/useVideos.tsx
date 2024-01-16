import { useContext } from "react";
import { VideosContext } from "../context/VideosContext";

export const useVideos = () => {
  const context = useContext(VideosContext);
  if (!context)
    throw new Error("useVideos must be used within a VideosProvider");
  return context;
};
