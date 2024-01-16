import { ERRORS, HTTP } from "../../constants";
import { Video as VideoType } from "../../interfaces";

interface VideoProps {
  videos: VideoType[];
}

export function Video({ videos }: VideoProps) {
  return (
    <div>
      {videos.map((video: VideoType) => (
        <li key={video._id} className="mb-3">
          <div className="relative">
            <div className="overflow-hidden rounded-md">
              <video width="700" controls loop style={{ borderRadius: "8px" }}>
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
    </div>
  );
}
