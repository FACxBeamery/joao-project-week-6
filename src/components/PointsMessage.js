import React, { useState, useEffect } from "react";

export const PointsMessage = ({
	visible,
	duration,
	onDurationEnd,
	children
}) => {
	const [isVisible, setVisibility] = useState(null);

	useEffect(() => {
		setVisibility(visible);
	}, [visible]);

	if (!isVisible) return null;

	if (duration) {
		setTimeout(() => {
			setVisibility(false);

			if (onDurationEnd) {
				onDurationEnd(false);
			}
		}, duration);
	}

	return children;
};

export default PointsMessage;
