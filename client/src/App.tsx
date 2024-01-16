import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import VideosPage from "./pages/videos/VideosPage";
import UploadVideoPage from "./pages/videos/UploadVideoPage";
import { VideoProvider } from "./context/provider/VideosProvider";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          element={
            <VideoProvider>
              <Outlet />
            </VideoProvider>
          }
        >
          <Route path="/" element={<VideosPage />} />
          <Route path="/new" element={<UploadVideoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
