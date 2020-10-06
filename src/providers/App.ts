import path from "path";
import dotenv from "dotenv";

import Express from "./Express";

import { Database } from "./Database";
import Log from "../middlewares/Log";
import Players from "../models/Players";

class App {
	public clearConsole(): void {
		process.stdout.write("\x1B[2J\x1B[0f");
	}

	public loadConfiguration(): void {
		Log.info("Configuration :: Booting @ Master...");
		dotenv.config({ path: path.join(process.cwd(), "/.env") });
	}

	public loadDatabase(): void {
		Log.info("Database :: Booting @ Master...");
		Database.init(() => {
			Log.info("Database :: Mount...");
		});
	}

	public loadWorker(): void {
		Log.info("Worker :: Booting @ Master...");
	}

	public loadServer(): void {
		Log.info("Server :: Booting @ Master...");
		Express.init();
	}
}

export default new App();
