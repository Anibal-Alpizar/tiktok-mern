import { VideosContext } from "../VideosContext";
import { uploadVideoRequest } from "../../api/video.api";
import { File } from "../../interfaces/video";

export const VideoProvider = ({ children }: any) => {

  const uploadVideo = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file.name!);
      const response = await uploadVideoRequest(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VideosContext.Provider
      value={{
        uploadVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
