import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 0}px,${y / 0}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 420}px,${y / 6 - 350}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 - 150}px,${y / 6 - 350}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 6 - 350}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6 + 450}px,${y / 6 - 350}px,0)`;

const useProgressiveImage = (src) => {
	const [sourceLoaded, setSourceLoaded] = useState(null);

	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => setSourceLoaded(src);
	}, [src]);

	return sourceLoaded;
};

export function Background() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 50, friction: 40 } }));
	const background = useProgressiveImage("./images/back.png");
	const first = useProgressiveImage("./images/1.png");
	const second = useProgressiveImage("./images/2.png");
	const third = useProgressiveImage("./images/3.png");
	const fourth = useProgressiveImage("./images/4.png");
	const loading = "./images/load.gif";

	return (
		<div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.div className="card1" style={{ transform: props.xy.interpolate(trans1), backgroundImage: `url(${background || loading})` }} />
			<animated.div className="card2" style={{ transform: props.xy.interpolate(trans2), backgroundImage: `url(${background ? first : ""})` }} />
			<animated.div className="card3" style={{ transform: props.xy.interpolate(trans3), backgroundImage: `url(${background ? second : ""})` }} />
			<animated.div className="card4" style={{ transform: props.xy.interpolate(trans4), backgroundImage: `url(${background ? third : ""})` }} />
			<animated.div className="card5" style={{ transform: props.xy.interpolate(trans5), backgroundImage: `url(${background ? fourth : ""})` }} />
		</div>
	);
}
