import path from "path";

export const getVideoDirectory = (videoName: string) => {
  return path.join(__dirname, "../../../videos", videoName);
};
