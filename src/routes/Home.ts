import { Router } from "express";

import { cache } from "./../providers/Cache";

import HomeController from "../controllers/HomeController";

const router = Router();

router.get("/", cache(10), HomeController.index);

export default router;
