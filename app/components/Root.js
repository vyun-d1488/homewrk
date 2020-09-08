import React from "react";

import { withStyles } from "@material-ui/styles";
import { useStyles } from "../containers/styles/useStyles";

import { MainText } from "./SlideEffect";
import { Background } from "./Background";

class Root extends React.Component {
	render() {
		return (
			<React.Fragment>
				<MainText />
				<Background />
			</React.Fragment>
		);
	}
}

export const RootComponent = withStyles(useStyles)(Root);
