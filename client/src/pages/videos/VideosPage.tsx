import { useEffect, useState } from "react";
import { Video } from "../../interfaces";
import axios from "axios";
import { HTTP, ERRORS } from "../../constants";

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios
      .get(HTTP.API_URL)
      .then((response) => {
        const modifiedVideos = response.data.map((video: Video) => ({
          ...video,
          tempFilePath: video.tempFilePath.replace("videos\\", ""),
        }));
        setVideos(modifiedVideos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1>Lista de Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h2>{video.tempFilePath}</h2>
            <h2>{video._id}</h2>
            <video width="320" height="240" controls loop>
              <source
                src={`${HTTP.API_URL_VIDEOS}/${video.tempFilePath}`}
                type="video/mp4"
              />
              {ERRORS.VIDEO_NOT_SUPPORTED}
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
