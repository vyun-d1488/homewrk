import { Application } from "express";
import path from "path";
import dotenv from "dotenv";

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
		const dbUserName = process.env.NODE_ORACLEDB_USERNAME;
		const dbPassword = process.env.NODE_ORACLEDB_PASSWORD;
		const connectionService = process.env.NODE_ORACLEDB_CONNECTIONSTRING;
		const csvPath =
			process.env.CSV_PATH ||
			path.resolve(process.cwd() + "/csv/data.csv");

		return {
			csvPath,
			dbUserName,
			dbPassword,
			connectionService,
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
