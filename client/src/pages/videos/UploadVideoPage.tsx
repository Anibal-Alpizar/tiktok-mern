import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";
import { File } from "../../interfaces/video";
import { FileInput } from "../../components/ui";
import { useForm } from "react-hook-form";

function UploadVideoPage() {
  const navigate = useNavigate();
  const { uploadVideo } = useVideos();

  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState<File>();
  const [isFileSelected, setFileSelected] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    try {
      console.log(data.description);
      if (file) {
        await uploadVideo(file, data.description);
        toast.success("Video uploaded successfully");
        navigate("/");
      } else {
        toast.error("Please select a video");
      }
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <button disabled={!isFileSelected} type="submit">
          Submit Video
        </button>
        <input
          className="text-black"
          autoFocus
          {...register("description")}
          type="text"
          placeholder="Description video"
        />
        <FileInput onchange={handlerInput} />
      </form>
    </div>
  );
}

export default UploadVideoPage;
