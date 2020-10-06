import oracledb from "oracledb";
import convert from "csvtojson/v2";

import Locals from "../providers/Locals";
import Log from "../middlewares/Log";
import db from "./Default";
import async from "async";

class Players {
	public async mount(fetch: () => void): Promise<any> {
		const csvPath = Locals.config().csvPath;
		convert()
			.fromFile(csvPath)
			.subscribe((al) => {
				db.insertClub(al);
				db.insertPosition(al);
				db.insertNationality(al);
				db.insertPlayerCharacteristics(al);
				db.insertPlayer(al);
				db.insertContracts(al);
				db.insertPlayerskills(al);
			})
			.on("done", () => {
				fetch();
			});
	}
}

export default new Players();
