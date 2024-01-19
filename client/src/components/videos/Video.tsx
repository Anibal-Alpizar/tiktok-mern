// video.tsx
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
          <div className=" rounded-md" style={{ width: "80%", margin: "auto" }}>
            <h2 className="text-white text-base mt-2">{video.name}</h2>
            <video
              controls
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
          </div>
        </li>
      ))}
    </div>
  );
}
