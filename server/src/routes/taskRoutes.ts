import { Router } from "express";
import { getTasks } from "../controller/taskController";
const router = Router();

router.get("/", getTasks);

export default router;