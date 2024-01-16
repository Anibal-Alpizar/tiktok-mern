import { useEffect, useState } from "react";
import { Video } from "../../interfaces";
import axios from "axios";
import { HTTP } from "../../constants";
import{ Video as VideoCard} from "../../components/videos/Video";

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
      <ul className="p-8">
        <VideoCard videos={videos} />
      </ul>
    </div>
  );
}

export default VideoList;
