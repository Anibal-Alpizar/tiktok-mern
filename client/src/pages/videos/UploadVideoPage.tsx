import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";
import { file } from "../../interfaces/video/videoProps";
import { Button, FileInput, Input } from "../../components/ui";
import { useForm } from "react-hook-form";

function UploadVideoPage() {
  const navigate = useNavigate();
  const { uploadVideo } = useVideos();

  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState<file>();
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
        <Input
          className="text-black w-full mb-4 text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          autoFocus
          {...register("description")}
          type="text"
          placeholder="Description video"
        />
        <FileInput onChange={handlerInput} />
        <Button
          className="w-full mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          disabled={!isFileSelected}
          type="submit"
        >
          Submit Video
        </Button>
      </form>
    </div>
  );
}

export default UploadVideoPage;
