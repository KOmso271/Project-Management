import { Router } from "express";
import { createProject, getProjects } from "../controlles/projectController";
const router = Router();

router.get("/", getProjects);
router.post("/", createProject);

export default router;