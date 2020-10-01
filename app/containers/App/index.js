import React from "react";
import axios from "axios";

export function App() {
	axios.get(`/api`).then((res) => {
		console.log(res.data);
	});
	return <h1>This is app</h1>;
}
