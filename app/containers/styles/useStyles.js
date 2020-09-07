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
		top: "16vh",
		left: "0",
		right: "0",
	},
	textOnBot: {
		top: "10vh",
		left: "0",
		right: "0",
	},
	outlinedHiddenText: {
		zIndex: 1,
	},
	filledHiddenText: {
		color: "#fff",
		zIndex: -1,
	},
	transparentImage: {
		position: "absolute",
		width: "1200px",
		filter: "brightness(0.6)",
		height: "960px",
	},
	block: {
		background: "black",
		position: "absolute",
		minWidth: "60ch",
		minWeight: "60ch",
		width: "45vw",
		height: "45vw",
		maxWidth: "100ch",
		maxWeight: "100ch",
		top: "55%",
		bottom: 0,
		left: "50%",
		right: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 0,
	},
});
