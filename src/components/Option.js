import React from "react";

const Option = ({ name, value, index }) => {
	return (
		<option key={index} value={value}>
			{name}
		</option>
	);
};

export default Option;
