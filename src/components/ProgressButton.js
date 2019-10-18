import React from "react";
import styles from "./Progress.module.css";

const ProgressButton = ({ setTriviaState, setConfigDetails, setPoints }) => {
	return (
		<button
			className={styles["progress__button"]}
			onClick={() => {
				setTriviaState("configuringForm");
				setConfigDetails({});
				setPoints(20);
			}}
		>
			Restart?
		</button>
	);
};

export default ProgressButton;
