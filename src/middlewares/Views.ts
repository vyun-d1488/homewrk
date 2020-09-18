import { Application, Request, Response } from "express";
import path from "path";

class Views {
	public static mount(_express: Application): Application {
		_express.get("*", (req: Request, res: Response) => {
			return res.sendFile(path.join(process.cwd(), "public", "index.html"));
		});

		return _express;
	}
}

export default Views;
