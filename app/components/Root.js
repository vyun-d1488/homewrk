import React from "react";

import { withStyles } from "@material-ui/styles";
import { useStyles } from "../containers/styles/useStyles";

import SlideEffect from "./SlideEffect";

class Root extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SlideEffect />
			</React.Fragment>
		);
	}
}

export default withStyles(useStyles)(Root);
