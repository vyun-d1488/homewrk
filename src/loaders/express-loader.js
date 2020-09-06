import express from "express";
import path from "path";
import indexRouter from "@/routes/index";

export const loadExpress = () => {
	const pathToViews = path.join(process.cwd(), "src/views/index.html");
	const app = express();

	app.use("/api", indexRouter);
	app.use(express.static("build/public"));

	app.use((req, res, next) => {
		console.log(`==> ${req.method} request at ${req.url}`);
		next();
	});

	app.get("*", (req, res) => {
		res.sendFile(pathToViews);
	});

	return app;
};
