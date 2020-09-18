import path from "path";
import express from "express";

import Log from "./Log";

class Statics {
	public static mount(_express: express.Application): express.Application {
		Log.info("Booting the 'Statics' middleware...");

		const options = { maxAge: 31557600000 };
		_express.use(express.static(path.join(process.cwd(), "/public"), options));

		return _express;
	}
}

export default Statics;
