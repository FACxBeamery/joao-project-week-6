import React, { useState, useEffect } from "react";

const Progress = ({ points, triviaState, setTriviaState }) => {
	const [progressMessage, setProgressMessage] = useState("");
	useEffect(() => {
		if (Number(points)) {
			if (points >= 20 && points < 100) {
				console.log("continue", points);
				setProgressMessage(`Your progress: ${points} points so far`);
			} else if (points < 20) {
				console.log("lost", points);
				// setTriviaState("lostTriva");
				setProgressMessage(`You lost!`);
			} else if (points === 100) {
				console.log("won", points);
				// setTriviaState("wonTrivia");
				setProgressMessage(`You won!`);
			}
		}
	}, [points]);

	return progressMessage ? <h1>{progressMessage}</h1> : "";
};

export default Progress;
