import React from "react";
import { background, first, second, third, fourth } from "assets";
import { useSpring, animated } from "react-spring";
import { SmoothImage } from "components/common";

import s from "./index.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 0}px,${y / 0}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 420}px,${y / 6 - 350}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 - 150}px,${y / 6 - 350}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 6 - 350}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6 + 450}px,${y / 6 - 350}px,0)`;

export default function Background() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 50, friction: 40 } }));
	return (
		<div className={s.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.div className={s.card1} style={{ transform: props.xy.interpolate(trans1) }}>
				<SmoothImage src={background} imgClassName={s.playerImage} transitionTime={1.0} />
			</animated.div>
			<animated.div className={s.card2} style={{ transform: props.xy.interpolate(trans2) }}>
				<SmoothImage src={first} imgClassName={s.playerImage} transitionTime={1.0} />
			</animated.div>
			<animated.div className={s.card3} style={{ transform: props.xy.interpolate(trans3) }}>
				<SmoothImage src={second} imgClassName={s.playerImage} transitionTime={1.0} />
			</animated.div>
			<animated.div className={s.card4} style={{ transform: props.xy.interpolate(trans4) }}>
				<SmoothImage src={third} imgClassName={s.playerImage} transitionTime={1.0} />
			</animated.div>
			<animated.div className={s.card5} style={{ transform: props.xy.interpolate(trans5) }}>
				<SmoothImage src={fourth} imgClassName={s.playerImage} transitionTime={1.0} />
			</animated.div>
		</div>
	);
}
