import { Application } from "express";

import Http from "./Http";
import Static from "./Static";
import Views from "./Views";

class Core {
	public static init(_express: Application): Application {
		_express = Http.mount(_express);

		_express = Static.mount(_express);

		_express = Views.mount(_express);

		return _express;
	}
}

export default Core;
