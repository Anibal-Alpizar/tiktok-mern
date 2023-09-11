import axios from "axios";
import { useState } from "react";

function UploadVideoPage() {
  const [file, setFile] = useState<any>({
    name: "",
  });

  const [isFileSelected, setFileSelected] = useState<boolean>(false);

  const handlerSubmit = async (e:any) => {
    e.preventDefault()
    try {
      const formData = new FormData();
      formData.append("file", file.name!);
      console.log(file.name)
      await axios.post("http://localhost:3000/upload", formData);
      console.log("Video uploaded successfully");
    } catch (error) {
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
