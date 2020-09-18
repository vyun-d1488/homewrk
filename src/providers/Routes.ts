import { Application } from "express";
import Locals from "./Locals";
import Log from "../middlewares/Log";

import homeRouter from "./../routes/Home";

class Routes {
	public mountHome(_express: Application): Application {
		const apiPrefix = Locals.config().apiPrefix;
		Log.info("Routes :: Mounting API Routes...");

		return _express.use(`/${apiPrefix}`, homeRouter);
	}
}

export default new Routes();
