import React from "react";
import { useSpring, animated } from "react-spring";
import { useStyles } from "../containers/styles/useStyles";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 0}px,${y / 0}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 420}px,${y / 6 - 350}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 - 150}px,${y / 6 - 350}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 6 - 350}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6 + 450}px,${y / 6 - 350}px,0)`;

export function SupremaTismAnim() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 50, friction: 40 } }));
	const classes = useStyles();
	return (
		<div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
			<animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
			<animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
			<animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
			<animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
		</div>
	);
}
