import { Request, Response, NextFunction } from "express";
import Players from "../models/Players";

class Home {
	public static index(
		req: Request,
		res: Response,
		next: NextFunction
	): Object {
		return Players.mount(() => {
			return res.status(200).send("success");
		});
	}
}

export default Home;
