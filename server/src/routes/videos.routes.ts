import { Router } from "express";
import {
  getVideos,
  postVideo,
  deleteVideos,
} from "../controllers/videos.controller";

const router: Router = Router();

router.get("/", getVideos);

router.post("/upload", postVideo);

router.delete("/", deleteVideos);

export default router;
