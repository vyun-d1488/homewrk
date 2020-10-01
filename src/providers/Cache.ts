import mcache from "memory-cache";

export function cache(_duration: number) {
	return (req, res, next) => {
		const key = "__express__" + req.originalUrl || req.url;

		const cachedBody = mcache.get(key);
		if (cachedBody) {
			res.send(cachedBody);
		} else {
			res.sendResponse = res.send;
			res.send = (body) => {
				mcache.put(key, body, _duration * 1000);
				res.sendResponse(body);
			};
			next();
		}
	};
}
