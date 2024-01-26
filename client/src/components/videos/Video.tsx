import { ERRORS, HTTP } from "../../constants";
import { Video as VideoType } from "../../interfaces/video/videoProps"
import { IoIosMusicalNotes } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { VideoProps } from "../../interfaces/video/videoProps";

export function Video({ videos }: VideoProps) {
  return (
    <ul className="" style={{ flexWrap: "inherit" }}>
      {videos.map((video: VideoType) => (
        <li key={video._id} className="mb-3">
          <div className="flex">
            <FaRegUserCircle className="text-4xl text-white" />
            <div
              className="rounded-md"
              style={{ width: "80%", margin: "auto" }}
            >
              <h1 className="font-bold text-lg">John Doe</h1>
              <p className="text-white text-lg">{video.description}</p>
              <div className="flex items-center gap-x-2 mb-3">
                <IoIosMusicalNotes />
                <h2 className="text-white text-sm">{video.name}</h2>
              </div>
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
          </div>
        </li>
      ))}
    </ul>
  );
}
