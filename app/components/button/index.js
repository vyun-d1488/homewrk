import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export function Button({ text, params }) {
	const [state, setState] = useState("");
	function fetchAPI() {
		return axios.get(params).then((res) => {
			setState(res);
		});
	}
	return (
		<div>
			<button onClick={fetchAPI}>{text}</button>
			{state.data ? state.data.rows : ""}
		</div>
	);
}

Button.propTypes = {
	params: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
