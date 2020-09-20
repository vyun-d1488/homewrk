import { Router, Request, Response } from "express";

const router = Router();

router.post(
	"/",
	(req: Request, res: Response): Response => {
		return res.json({
			msg: "Home",
		});
	}
);

export default router;
