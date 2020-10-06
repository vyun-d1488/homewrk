import { Router } from "express";

import { cache } from "./../providers/Cache";

import HomeController from "../controllers/HomeController";
import TasksController from "../controllers/TasksController";

const router = Router();

router.get("/insert", cache(10), HomeController.index);
router.get("/task1", cache(10), TasksController.task1);
router.get("/task2", cache(10), TasksController.task2);
router.get("/task3", cache(10), TasksController.task3);
router.get("/task4", cache(10), TasksController.task4);
router.get("/task5", cache(10), TasksController.task5);
router.get("/task10", cache(10), TasksController.task10);

export default router;
