import { Router } from "express";
import { signup, signin, signout } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/signout", signout);

export default router;
