import React from "react";

export class SmoothImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: {},
		};

		this.imageLoadHandler = this.imageLoadHandler.bind(this);
	}

	imageLoadHandler() {
		const { transitionTime, transitionTimingFunction } = this.props;
		this.setState({
			loaded: {
				opacity: "1",
				transitionProperty: "opacity",
				transitionDuration: `${transitionTime}s`,
				transitionTimingFunction,
			},
		});
	}

	render() {
		const { src, alt, imgClassName } = this.props;
		const { loaded } = this.state;

		return <img style={Object.assign({}, loaded)} src={src} alt={alt} className={imgClassName} onLoad={this.imageLoadHandler} />;
	}
}
