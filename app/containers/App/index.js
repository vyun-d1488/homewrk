import React, { Suspense } from "react";

import { Background, Text } from "components";

export function App() {
	return (
		<Suspense fallback={<div>Загрузка...</div>}>
			<div>
				<Background />
				<Text />
			</div>
		</Suspense>
	);
}
