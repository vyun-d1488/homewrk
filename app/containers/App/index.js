import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { mainTheme } from "containers/themes/main";
import { Background, Text } from "components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme(mainTheme);

export function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<div>
				<Background />
				<Text />
			</div>
		</MuiThemeProvider>
	);
}
