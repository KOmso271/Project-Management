import { Router } from "express";
import { getTeams } from "../controlles/teamControllers";
const router = Router();
router.get("/", getTeams);
export default router;
