import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./index.css";

import { ParallaxProvider } from "react-scroll-parallax";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { mainTheme } from "./containers/themes/main";

import { RootComponent } from "./components/Root";

const theme = createMuiTheme(mainTheme);

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<ParallaxProvider>
			<RootComponent />
		</ParallaxProvider>
	</MuiThemeProvider>,
	document.getElementById("root")
);
