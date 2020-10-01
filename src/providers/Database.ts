import oracledb from "oracledb";
import bluebird from "bluebird";

import Locals from "./Locals";
import Log from "../middlewares/Log";

export class Database {
	public static async init(fetch: () => void): Promise<void> {
		const dbUserName = Locals.config().dbUserName;
		const dbPassword = Locals.config().dbPassword;
		const connectionService = Locals.config().connectionService;

		const connection = await oracledb.createPool(
			{
				user: dbUserName,
				password: dbPassword,
				connectString: connectionService,
				poolAlias: "default",
				poolMin: 1,
				poolMax: 50,
				poolTimeout: 300,
				queueMax: 200000,
				queueTimeout: 200000,
			},
			(error: Error) => {
				if (error) {
					Log.error("Failed to connect to the oracledb server");
					Log.error(String(error));
				} else {
					Log.info(
						"Connected to oracledb server at : " + connectionService
					);

					fetch();
				}
			}
		);
	}
}

export default oracledb;
