import React from "react";

import { Button } from "components";

export function App() {
	return (
		<div>
			<Button text="insertdata" params="api/insert" />
			<Button text="task1" params="api/task1" />
			<Button text="task2" params="api/task2" />
			<Button text="task3" params="api/task3" />
			<Button text="task4" params="api/task5" />
			<Button text="task4" params="api/task10" />
		</div>
	);
}
