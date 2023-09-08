import { Router } from "express";
import { getVideos, postVideo } from "../controllers/videos.controller";

const router: Router = Router();

router.get("/", getVideos);

router.post("/upload", postVideo);

export default router;
