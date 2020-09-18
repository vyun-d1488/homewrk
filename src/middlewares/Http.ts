import cors from "cors";
import { Application } from "express";
import flash from "express-flash";
import compress from "compression";
import bodyParser from "body-parser";

import Log from "./Log";
import Locals from "../providers/Locals";

class Http {
	public static mount(_express: Application): Application {
		Log.info("Booting the 'HTTP' middleware...");

		_express.use(
			bodyParser.json({
				limit: Locals.config().maxUploadLimit,
			})
		);

		_express.use(
			bodyParser.urlencoded({
				limit: Locals.config().maxUploadLimit,
				parameterLimit: Locals.config().maxParameterLimit,
				extended: false,
			})
		);

		_express.disable("x-powered-by");

		_express.use(cors());

		_express.use(compress());

		return _express;
	}
}

export default Http;
