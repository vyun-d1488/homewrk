export const useStyles = (theme) => ({
	"@global": {
		"*::-webkit-scrollbar": {
			width: "0.3vh",
			backgroundColor: "transparent",
		},
		"*::-webkit-scrollbar-track": {
			backgroundColor: "transparent",
		},
		"*::-webkit-scrollbar-thumb": {
			backgroundColor: "#fff",
		},
	},
	mainText: {
		position: "absolute",
		bottom: 0,
		transform: "translate(-50%, -50%)",
		wordWrap: "none",
		whiteSpace: "nowrap",
	},
	textOnTop: {
		top: "20vh",
		left: "0",
		right: "50",
	},
	textOnBot: {
		top: "10vh",
		left: "0",
		right: "50",
	},
	outlinedHiddenText: {
		zIndex: 1,
	},
	filledHiddenText: {
		color: "#fff",
		zIndex: -1,
	},
	block: {
		backgroundColor: "#ff6600",
		height: "100vh",
		position: "absolute",
		width: "50%",
		minWidth: "300px",
		height: "100%",
		top: "55%",
		bottom: 0,
		left: "50%",
		right: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 0,
	},
});
