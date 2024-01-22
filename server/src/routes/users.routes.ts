import { Router, RequestHandler } from "express";
import { getAllUsers, deleteAllUsers } from "../controllers/users.controller";
import { isAuth } from "../middleware/auth.middleware";

const router: Router = Router();

router.get("/users", [isAuth as RequestHandler], getAllUsers);

router.delete("/users", deleteAllUsers);

export default router;
