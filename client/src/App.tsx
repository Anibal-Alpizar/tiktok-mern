import { useState } from "react";

function App() {
  const [file, setFile] = useState<string>();
  const [isFileSelected, setisFileSelected] = useState<boolean>(false);

  const handlerForm = (e: any) => {
    e.preventDefault();
    console.log(file);
  };

  const handlerFile = (e: any) => {
    if (file == null) {
      setFile(e.target.files[0]);
      setisFileSelected(true);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <form onSubmit={handlerForm}>
      <input type="file" name="file" onChange={handlerFile} />
      <button disabled={!isFileSelected} type="submit">
        Submit Video
      </button>
    </form>
  );
}

export default App;
