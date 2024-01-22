import { Router } from "express";
import { getAllUsers, deleteAllUsers } from "../controllers/users.controller";

const router: Router = Router();

router.get("/users", getAllUsers);

router.delete("/users", deleteAllUsers);

export default router;
