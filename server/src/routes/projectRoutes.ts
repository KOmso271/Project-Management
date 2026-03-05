import { Router } from "express";
import { getProjects } from "../controller/projectController";
const router = Router();

router.get("/", getProjects);

export default router;