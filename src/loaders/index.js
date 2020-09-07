import { loadExpress } from "./express-loader";

export const init = async () => {
	const port = process.env.PORT || 3000;
	const app = loadExpress();
	app.listen(port, () => {
		console.log(`==> Listening on port ${port}`);
	});
};
