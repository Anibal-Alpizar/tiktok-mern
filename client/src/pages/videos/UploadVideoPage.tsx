import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";
import { File } from "../../interfaces/video";
import FileInput from "../../components/ui/FileInput";

function UploadVideoPage() {
  const navigate = useNavigate();
  const { uploadVideo } = useVideos();

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
    <div className="max-w-7xl px-4 mx-auto">
      <form onSubmit={handlerSubmit}>
        <button disabled={!isFileSelected} type="submit">
          Submit Video
        </button>
        <FileInput onchange={handlerInput} />
      </form>
    </div>
  );
}

export default UploadVideoPage;
