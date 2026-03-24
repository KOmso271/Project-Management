import { Router } from "express";
import { search } from "../controlles/searchController";
const router = Router();

router.get("/", search);

export default router;