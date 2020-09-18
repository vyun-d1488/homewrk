import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";

type Object = {
	[name: string]: any;
};

class Locals {
	public static config(): Object {
		dotenv.config({ path: path.join(process.cwd(), "/.env") });

		const port = process.env.PORT || 3000;
		const url = process.env.APP_URL || `http://localhost:${port}`;
		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const apiPrefix = process.env.API_PREFIX || "api";

		return {
			apiPrefix,
			isCORSEnabled,
			port,
			url,
		};
	}

	public static init(_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;
