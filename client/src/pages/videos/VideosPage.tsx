import { useEffect } from "react";
import { Video } from "../../components/videos/Video";
import { useVideos } from "../../hooks/useVideos";

function VideoList() {
  const { loadVideos, videos } = useVideos();

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <ul className="p-8">
        <Video videos={videos} />
      </ul>
    </div>
  );
}

export default VideoList;
