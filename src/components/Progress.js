import React, { useState, useEffect } from "react";
import ProgressButton from "./ProgressButton";

import styles from "./Progress.module.css";

const Progress = ({
	points,
	setPoints,
	triviaState,
	setConfigDetails,
	setTriviaState
}) => {
	const [progressMessage, setProgressMessage] = useState("");
	useEffect(() => {
		if (points >= 20 && points < 100) {
			setProgressMessage(`${points}/100 points `);
		} else if (points < 20) {
			setProgressMessage(`You lost!😢`);
		} else if (points === 100) {
			setProgressMessage(`You won!👑`);
		}
	}, [points]);

	return progressMessage ? (
		<div className={styles["progress__wrapper"]}>
			<h1
				className={
					progressMessage === "You won!👑"
						? `${styles["progress__message"]} ${
								styles["progress__message--win"]
						  }`
						: progressMessage === `You lost!😢 `
						? `${styles["progress__message"]} ${
								styles["progress__message--lose"]
						  }`
						: `${styles["progress__message"]} `
				}
			>
				{progressMessage}
			</h1>
			{points < 20 || points === 100 ? (
				<ProgressButton
					setTriviaState={setTriviaState}
					setConfigDetails={setConfigDetails}
					setPoints={setPoints}
				/>
			) : null}
		</div>
	) : (
		""
	);
};

export default Progress;
