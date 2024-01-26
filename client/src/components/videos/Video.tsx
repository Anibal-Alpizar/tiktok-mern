import { ERRORS, HTTP } from "../../constants";
import { Video as VideoType } from "../../interfaces/video/videoProps";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaRegUserCircle, FaCommentDots } from "react-icons/fa";
import { VideoProps } from "../../interfaces/video/videoProps";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export function Video({ videos }: VideoProps) {
  const [likedVideos, setLikedVideos] = useState<string[]>([]);

  const handleHeartClick = (videoId: string) => {
    console.log(`Video liked: ${videoId}`);
    const updatedLikedVideos = likedVideos.includes(videoId)
      ? likedVideos.filter((id) => id !== videoId)
      : [...likedVideos, videoId];

    setLikedVideos(updatedLikedVideos);
  };

  return (
    <ul className="" style={{ flexWrap: "inherit" }}>
      {videos.map((video: VideoType) => (
        <li key={video._id} className="mb-3">
          <div className="relative">
            <div className="flex">
              <FaRegUserCircle className="text-4xl text-white" />
              <div
                onDoubleClick={() => handleHeartClick(video._id)}
                className="rounded-md relative"
                style={{ width: "80%", margin: "auto" }}
              >
                <h1 className="font-bold text-lg">John Doe</h1>
                <p className="text-white text-lg">{video.description}</p>
                <div className="flex items-center gap-x-2 mb-3">
                  <IoIosMusicalNotes />
                  <h2 className="text-white text-sm">{video.name}</h2>
                </div>
                <div style={{ position: "relative" }}>
                  <video
                    // controls
                    autoPlay={true}
                    muted
                    loop
                    style={{
                      borderRadius: "8px",
                      width: "22rem",
                      height: "490px",
                      objectFit: "cover",
                    }}
                  >
                    <source
                      src={`${HTTP.API_URL_VIDEOS}/${video.tempFilePath}`}
                      type="video/mp4"
                    />
                    {ERRORS.VIDEO_NOT_SUPPORTED}
                  </video>
                  <FaHeart
                    data-videoid={video._id}
                    className={`text-3xl absolute top-72 left-4 transform -translate-y-1/2 cursor-pointer ${
                      likedVideos.includes(video._id) ? "text-red-700" : ""
                    }`}
                    onClick={() => handleHeartClick(video._id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
