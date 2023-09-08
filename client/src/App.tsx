import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState<any>({
    name: "",
  });

  const [isFileSelected, setFileSelected] = useState<boolean>(false);

  const handlerSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file.name!);
    await axios.post("http://localhost:3000/upload", formData);
    console.log("Video uploaded successfully");
  };

  const handlerInput = (e: any) => {
    setFile({ ...file, name: e.target.files![0] });
    setFileSelected(true)
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input type="file" onChange={handlerInput} accept="video/*" />
      <button disabled={!isFileSelected} type="submit">Submit Video</button>
    </form>
  );
}

export default App;
