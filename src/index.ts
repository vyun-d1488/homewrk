import App from "./providers/App";
import NativeEvent from "./exception/NativeEvent";

import { cpus } from "os";
import cluster from "cluster";

function main() {
	const numCPUs = cpus();

	if (cluster.isMaster) {
		NativeEvent.process();

		App.loadConfiguration();

		numCPUs.forEach(() => cluster.fork());

		NativeEvent.cluster(cluster);

		setTimeout(() => {
			App.loadWorker();
		}, 1000 * 60);
	} else {
		App.loadServer();
	}
}

main();
