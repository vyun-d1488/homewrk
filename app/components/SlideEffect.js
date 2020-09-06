import React from "react";

import Parallax, { Layer } from "react-parallax-scroll";

import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { useStyles } from "../containers/styles/useStyles";
import { SupremaTismAnim } from "./MouseOverAnim";

class SlideEffect extends React.Component {
	render() {
		const { classes } = this.props;

		const textTOP = `________________ilyas     sagi                    `;
		const textBOT = `baiguzhin ___________                            `;

		return (
			<Parallax>
				<div className="bit">
					<Typography variant="h1" className={`${classes.outlinedHiddenText} ${classes.mainText} ${classes.textOnBot}`}>
						<Layer settings={{ speed: 0.1, type: ["translateX"] }}>
							<span className="outlinedText row">
								<span>{textTOP}</span>
							</span>
						</Layer>
					</Typography>
					<Typography variant="h1" className={`${classes.filledHiddenText} ${classes.mainText} ${classes.textOnBot}`}>
						<Layer settings={{ speed: 0.1, type: ["translateX"] }}>
							<span className="row">
								<span>{textTOP}</span>
							</span>
						</Layer>
					</Typography>
					<Typography variant="h1" className={`${classes.outlinedHiddenText} ${classes.mainText} ${classes.textOnTop}`}>
						<Layer settings={{ speed: -0.1, type: ["translateX"] }}>
							<span className="outlinedText row">
								<span>{textBOT}</span>
							</span>
						</Layer>
					</Typography>
					<Typography variant="h1" className={`${classes.filledHiddenText} ${classes.mainText} ${classes.textOnTop}`}>
						<Layer settings={{ speed: -0.1, type: ["translateX"] }}>
							<span className="row">
								<span>{textBOT}</span>
							</span>
						</Layer>
					</Typography>
				</div>

				{/* <img src="/images/1.jpg" alt="" className={`${classes.block} ${classes.transparentImage}`} /> */}
				{/* <div className={classes.block}> */}
				<SupremaTismAnim />
				{/* </div> */}
			</Parallax>
		);
	}
}

SlideEffect.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SlideEffect);
