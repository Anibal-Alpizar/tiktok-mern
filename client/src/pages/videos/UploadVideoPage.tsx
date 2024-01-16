import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";
import { File } from "../../interfaces/video";

function UploadVideoPage() {
  const navigate = useNavigate();
  const { uploadVideo} = useVideos();

  const [file, setFile] = useState<File>();
  const [isFileSelected, setFileSelected] = useState<boolean>(false);

  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (file) {
        await uploadVideo(file);
        toast.success("Video uploaded successfully");
        navigate("/");
      } else toast.error("Please select a video");
    } catch (error) {
      toast.error("Error uploading video");
      console.log(error);
    }
  };

  const handlerInput = (e: any) => {
    setFile({ ...file, name: e.target.files![0] });
    setFileSelected(true);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input type="file" onChange={handlerInput} accept="video/*" />
      <button disabled={!isFileSelected} type="submit">
        Submit Video
      </button>
    </form>
  );
}

export default UploadVideoPage;
