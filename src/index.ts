import os from "os";
import cluster from "cluster";

import App from "./providers/App";
import NativeEvent from "./exception/NativeEvent";

if (cluster.isMaster) {
	NativeEvent.process();

	App.clearConsole();

	App.loadConfiguration();

	const CPUS: any = os.cpus();

	CPUS.forEach(() => cluster.fork());

	NativeEvent.cluster(cluster);

	setTimeout(() => App.loadWorker(), 1000 * 60);
} else {
	App.loadServer();

	App.loadDatabase();
}
