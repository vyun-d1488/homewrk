import express from "express";
import indexRouter from "@/routes/index";

export const loadExpress = () => {
	const app = express();

	app.use("/api", indexRouter);
	app.use(express.static("build/public"));

	app.use((req, res, next) => {
		console.log(`==> ${req.method} request at ${req.url}`);
		next();
	});

	app.get("*", (req, res) => {
		res.sendFile("index");
	});

	return app;
};
