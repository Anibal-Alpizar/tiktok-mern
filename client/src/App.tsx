import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import VideosPage from "./pages/videos/VideosPage";
import UploadVideoPage from "./pages/videos/UploadVideoPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path="/new" element={<UploadVideoPage />} />
      </Routes>
    </>
  );
}

export default App;
