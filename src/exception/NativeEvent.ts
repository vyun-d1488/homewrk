import Log from "../middlewares/Log";

class NativeEvent {
	public cluster(_cluster): void {
		_cluster.on("listening", (worker) => Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected!`));

		_cluster.on("online", (worker) => Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' has responded after it was forked! `));

		_cluster.on("disconnect", (worker) => Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' Disconnected!`));

		_cluster.on("exit", (worker, code, signal) => {
			Log.info(`Server :: Cluster with ProcessID '${worker.process.pid}' is Dead with Code '${code}, and signal: '${signal}'`);
			_cluster.fork();
		});
	}

	public process(): void {
		process.on("uncaughtException", (exception) => Log.error(exception.stack));

		process.on("warning", (warning) => Log.warn(warning.stack));
	}
}

export default new NativeEvent();
