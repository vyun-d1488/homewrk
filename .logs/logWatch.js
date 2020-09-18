const fs = require("fs");
const readline = require("readline");
const path = require("path");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

fs.readdir(__dirname, (err, files) => {
	if (err) return console.log("\x1b[31m%s\x1b[0m", "Error with reading current dir");
	files.map((file, i) => {
		if (file.split(".").pop() === "log") {
			console.log(`\x1b[33m%s\x1b[0m`, ` > ${i + 1}`);
			rl.write(file + "\n");
		}
	});
	return startWatch();
});

function startWatch() {
	rl.question("Log file: ", (_log) => {
		rl.on("line", (line) => {
			_log = line;
		});
		const _path = path.join(__dirname, _log);
		const logFileBefore = fs.readFileSync(_path, "utf8").split("\n");
		console.log("\x1b[36m%s\x1b[0m", "Watching... \n");

		fs.watchFile(_log, () => {
			if (_log) {
				console.log("\x1b[36m%s\x1b[0m", `Starting "${_log}" \n`);
			}
			const logFileAfter = fs.readFileSync(_path, "utf8").split("\n");
			const addedChanges = logFileBefore.length - logFileAfter.length;
			const changes = logFileAfter.slice(addedChanges, logFileAfter.length - 1);

			changes.map((log) => {
				console.log("\x1b[2m%s\x1b[0m", log);
				if (log === changes[changes.length - 1]) {
					console.log("\x1b[36m%s\x1b[0m", "Waiting due to changes... \n");
				}
			});
		});
	});
}
