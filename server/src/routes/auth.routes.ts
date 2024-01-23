import { Router, RequestHandler } from "express";
import { signup, signin, signout, me } from "../controllers/auth.controller";
import { isAuth } from "../middleware/auth.middleware";
import { validateSchema } from "../middleware/validate.middleware";
import { signupSchema } from "../schema/auth.schema";

const router: Router = Router();

router.post("/signup", [validateSchema(signupSchema)], signup);

router.post("/signin", signin);

router.get("/signout", signout);

router.get("/me", [isAuth as RequestHandler], me);

export default router;
