import { file, video } from "../../video/videoProps";

export interface videosContextProps {
  uploadVideo: (file: file, description: string) => void;
  loadVideos: () => void;
  videos: video[];
}
