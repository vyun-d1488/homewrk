import express from "express";

import Locals from "./Locals";
import Routes from "./Routes";
// import Bootstrap from "../middlewares/Kernel";

class Express {
	public express: express.Application;

	constructor() {
		this.express = express();

		this.mountDotEnv();
		// this.mountMiddlewares();
		this.mountRoutes();
	}

	private mountDotEnv(): void {
		this.express = Locals.init(this.express);
	}

	// private mountMiddlewares(): void {
	// 	this.express = Bootstrap.init(this.express);
	// }

	private mountRoutes(): void {
		this.express = Routes.mountHome(this.express);
	}

	public init(): void {
		const port: number = Locals.config().port;

		this.express.listen(port, () => {
			return console.log(`==> Server :: Running @ 'http://localhost:${port}'`);
		});
	}
}

export default new Express();
