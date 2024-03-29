import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import VideosPage from "./pages/videos/VideosPage";
import UploadVideoPage from "./pages/videos/UploadVideoPage";
import { VideoProvider } from "./context/provider/VideosProvider";
import { AuthProvider } from "./context/provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // ! Fix this error: This JSX tag's 'children' prop expects type 'ReactNode[]' which requires multiple children, but only a single child was provided.
  // ! Not Failed to compile
  return (
    <>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
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
