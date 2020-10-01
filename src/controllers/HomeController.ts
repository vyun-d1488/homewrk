import { Request, Response, NextFunction } from "express";

class Home {
	public static index(
		req: Request,
		res: Response,
		next: NextFunction
	): Response {
		return res.status(200).send("Hello world");
	}
}

export default Home;
