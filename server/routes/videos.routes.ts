import { Router } from "express";
import { getVideos } from "../controllers/videos.controller";

const router: Router = Router();

router.get('/', getVideos)

export default router