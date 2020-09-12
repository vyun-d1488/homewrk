import React from "react";
import { useSpring, animated } from "react-spring";
import background from "assets/images/back.png";
import first from "assets/images/1.png";
import second from "assets/images/2.png";
import third from "assets/images/3.png";
import fourth from "assets/images/4.png";

import s from "./index.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 0}px,${y / 0}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 420}px,${y / 6 - 350}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 - 150}px,${y / 6 - 350}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 6 - 350}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6 + 450}px,${y / 6 - 350}px,0)`;

export function Background() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 50, friction: 40 } }));
	return (
		<div className={s.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
			<animated.div className={s.card1} style={{ transform: props.xy.interpolate(trans1), backgroundImage: `url(${background})` }} />
			<animated.div className={s.card2} style={{ transform: props.xy.interpolate(trans2), backgroundImage: `url(${first})` }} />
			<animated.div className={s.card3} style={{ transform: props.xy.interpolate(trans3), backgroundImage: `url(${second})` }} />
			<animated.div className={s.card4} style={{ transform: props.xy.interpolate(trans4), backgroundImage: `url(${third})` }} />
			<animated.div className={s.card5} style={{ transform: props.xy.interpolate(trans5), backgroundImage: `url(${fourth})` }} />
		</div>
	);
}
