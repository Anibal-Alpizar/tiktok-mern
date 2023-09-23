import { useEffect, useState } from "react";
import axios from "axios";

interface Video {
  _id: string;
  name: string;
  tempFilePath: string;
}

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/") // La URL de tu servidor
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
            <video width="320" height="240" controls loop>
              <source
                src={`http://localhost:3000/videos/${video.tempFilePath}`}
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
