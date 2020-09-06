import { loadExpress } from "./express-loader";

export const init = async () => {
	const app = loadExpress();
	app.listen(3000, () => {
		console.log(`==> Listening on port ${3000}`);
	});
};
