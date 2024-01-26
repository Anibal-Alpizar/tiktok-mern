import { VideosContext } from "../VideosContext";
import { getVideosRequest, uploadVideoRequest } from "../../api/video.api";
import { file, video } from "../../interfaces/video/videoProps";
import { useState } from "react";

export const VideoProvider = ({ children }: any) => {
  const [videos, setVideos] = useState<video[]>([]);

  const loadVideos = async () => {
    try {
      const response = await getVideosRequest();
      const modifiedVideos = response.data.map((video: video) => ({
        ...video,
        tempFilePath: video.tempFilePath.replace("videos\\", ""),
      }));

      setVideos(modifiedVideos);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadVideo = async (file: file, description: string) => {
    try {
      const formData = new FormData();

      formData.append("file", file.name!);
      formData.append("description", description);

      await uploadVideoRequest(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VideosContext.Provider
      value={{
        uploadVideo,
        loadVideos,
        videos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
