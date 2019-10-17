import React, { useState, useEffect } from "react";

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
			setProgressMessage(`You lost!😢 `);
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
				<button
					className={styles["progress__button"]}
					onClick={(e) => {
						setTriviaState("configuringForm");
						setConfigDetails({});
						setPoints(20);
					}}
				>
					Restart?
				</button>
			) : null}
		</div>
	) : (
		""
	);
};

export default Progress;
