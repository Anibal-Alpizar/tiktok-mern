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
    <div
      className="flex justify-center items-center"
      style={{ backgroundColor: "#121212" }}
    >
      <ul className="p-8">
        {videos.map((video) => (
          <li key={video._id} className="mb-3">
            <div className="relative">
              <div className="overflow-hidden rounded-md">
                <video
                  width="700"
                  controls
                  loop
                  style={{ borderRadius: "8px" }}
                >
                  <source
                    src={`${HTTP.API_URL_VIDEOS}/${video.tempFilePath}`}
                    type="video/mp4"
                  />
                  {ERRORS.VIDEO_NOT_SUPPORTED}
                </video>
              </div>
              <h2 className="text-white text-base mt-2">{video.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
