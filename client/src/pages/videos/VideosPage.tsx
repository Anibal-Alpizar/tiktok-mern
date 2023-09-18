import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

interface Video {
  _id: string;
  name: string;
  tempFilePath: string;
}

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
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
    <div>
      <h1>Lista de Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h2>{video.tempFilePath}</h2>
            <h2>{video._id}</h2>
            <video width="320" height="240" controls>
              <source
                src={`http://localhost:3000/videos/${video.tempFilePath}.mp4`}
                type="video/mp4"
              />
              Tu navegador no admite el elemento de video.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
