import { Request, Response, NextFunction } from "express";
import Tasks from "../models/Tasks";
import Log from "../middlewares/Log";

class TasksController {
	public static task1(req: Request, res: Response, next: NextFunction): any {
		return Tasks.task1((err, al) => {
			if (err) {
				Log.error(err);
				res.send(err);
			} else {
				res.status(200).send(al);
			}
		});
	}
	public static task2(req: Request, res: Response, next: NextFunction): any {
		return Tasks.task2((err, al) => {
			if (err) {
				Log.error(err);

				res.send(err);
			} else {
				res.status(200).send(al);
			}
		});
	}
	public static task3(req: Request, res: Response, next: NextFunction): any {
		return Tasks.task3((err, al) => {
			if (err) {
				Log.error(err);

				res.send(err);
			} else {
				res.status(200).send(al);
			}
		});
	}
	public static task4(req: Request, res: Response, next: NextFunction): any {
		return Tasks.task4((err, al) => {
			if (err) {
				Log.error(err);

				res.send(err);
			} else {
				res.status(200).send(al);
			}
		});
	}
	public static task5(req: Request, res: Response, next: NextFunction): any {
		return Tasks.task5((err, al) => {
			if (err) {
				Log.error(err);

				res.send(err);
			} else {
				res.status(200).send(al);
			}
		});
	}
	public static task10(req: Request, res: Response, next: NextFunction): any {
		return Tasks.task5((err, al) => {
			if (err) {
				Log.error(err);

				res.send(err);
			} else {
				res.status(200).send(al);
			}
		});
	}
}

export default TasksController;
