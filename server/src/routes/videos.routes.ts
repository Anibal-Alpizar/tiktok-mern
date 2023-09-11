import { Router } from "express";
import {
  getVideo,
  getVideos,
  playVideo,
  postVideo,
} from "../controllers/videos.controller";

const router: Router = Router();

router.get("/", getVideos);

router.get("/:id", getVideo);

router.get("/videos/:id", playVideo)

router.post("/upload", postVideo);

export default router;
