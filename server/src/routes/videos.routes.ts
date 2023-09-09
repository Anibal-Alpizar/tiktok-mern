import { Router } from "express";
import {
  getVideo,
  getVideos,
  postVideo,
} from "../controllers/videos.controller";

const router: Router = Router();

router.get("/", getVideos);

router.get("/:id", getVideo);

router.post("/upload", postVideo);

export default router;
