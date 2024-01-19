import { VideosContext } from "../VideosContext";
import { getVideosRequest, uploadVideoRequest } from "../../api/video.api";
import { File, Video } from "../../interfaces/video";
import { useState } from "react";

export const VideoProvider = ({ children }: any) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [file, setFile] = useState<File>();
  const [currentFormData, setCurrentFormData] = useState<FormData>();

  const loadVideos = async () => {
    try {
      const response = await getVideosRequest();
      const modifiedVideos = response.data.map((video: Video) => ({
        ...video,
        tempFilePath: video.tempFilePath.replace("videos\\", ""),
      }));

      setVideos(modifiedVideos);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadVideo = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file.name!);
      const response = await uploadVideoRequest(formData);

      setFile(file);

      console.log(file);
      // console.log(response);
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
