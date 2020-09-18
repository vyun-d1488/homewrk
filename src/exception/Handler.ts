import { Application, Request, Response, NextFunction } from "express";

import Log from "../middlewares/Log";
import Locals from "../providers/Locals";

class Handler {
	public static notFoundHandler(_express: Application): Application {
		_express.use("*", (req, res) => {
			res.status(404);
			return res.json({
				error: "Page Not Found",
			});
		});

		return _express;
	}

	public static clientErrorHandler(err, req: Request, res: Response, next: NextFunction): Response | void {
		Log.error(err.stack);

		if (req.xhr) {
			return res.status(500).send({ error: "Something went wrong!" });
		} else {
			return next(err);
		}
	}

	public static errorHandler(err, req: Request, res: Response, next: NextFunction): Response {
		Log.error(err.stack);
		res.status(500);

		const apiPrefix = Locals.config().apiPrefix;
		if (req.originalUrl.includes(`/${apiPrefix}/`)) {
			if (err.name && err.name === "UnauthorizedError") {
				const innerMessage = err.inner && err.inner.message ? err.inner.message : undefined;
				return res.json({
					error: ["Invalid Token!", innerMessage],
				});
			}

			return res.json({
				error: err,
			});
		}

		return res.json({ error: err.stack });
	}

	public static logErrors(err, req: Request, res: Response, next: NextFunction): void {
		Log.error(err.stack);

		return next(err);
	}
}

export default Handler;
