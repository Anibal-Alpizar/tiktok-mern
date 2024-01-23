import { Router, RequestHandler } from "express";
import { signup, signin, signout, me } from "../controllers/auth.controller";
import { isAuth } from "../middleware/auth.middleware";

const router: Router = Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/signout", signout);

router.get("/me", [isAuth as RequestHandler], me);

export default router;
