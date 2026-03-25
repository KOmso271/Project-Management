import { Router } from "express";

import {getUsers } from "../controlles/userController";
const router = Router();
router.get("/", getUsers);
export default router;
