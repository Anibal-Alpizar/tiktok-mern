import { useEffect, useState } from "react";
import axios from "axios";


type Video = {
  _id: string; 
  name: string;
  tempFilePath: string;
};

function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setVideos(response.data);
      } catch (error) {
        console.error("Error al obtener videos:", error);
      }
    };
    
    getAllVideos();
  
    
  }, []);
  return (
    <div>
      <h1>Lista de Videos</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={video._id}>
            <p>{index} - {`http://localhost:3000/${video.tempFilePath}`}</p>
            <video controls>
              <source src={`http://localhost:3000/${video.tempFilePath}`} type="video/mp4" />
            </video>
            <p>{video.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideosPage;
