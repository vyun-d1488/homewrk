import oracledb from "oracledb";
import Log from "../middlewares/Log";

class Service {
	cvert(str) {
		return str.replace(/\D+/g, "");
	}
	async executeInsert(
		query: string,
		bind: object,
		options: object
	): Promise<void> {
		await oracledb.getConnection((err, connection: oracledb.connection) => {
			if (err) {
				console.log(err);
				process.exit();
			}

			connection.execute(query, bind, options, (err) => {
				if (err) {
					console.log(err);
				}

				connection.close();
			});
		});
	}
	public createBinding(
		val,
		type = oracledb.STRING,
		dir = oracledb.BIND_IN
	): Object {
		if (Number(val)) {
			val = Math.floor(Number(val));
			type = oracledb.NUMBER;
		}
		return {
			val,
			type,
			dir,
		};
	}
}

export default new Service();
