import React, { useState } from "react";

import styles from "./Question.module.css";

const Question = ({
	question,
	answers,
	correctAnswer,
	incorrectAnswers,
	index,
	setPoints,
	points,
	setActiveQuestionIndex,
	activeQuestionIndex,
	setProgress
}) => {
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			if (selectedAnswer) {
				if (selectedAnswer === correctAnswer) {
					setPoints(points + 20);
					if (points === 100) {
						setProgress("won");
					} else {
						setActiveQuestionIndex(activeQuestionIndex + 1);
					}
				} else if (
					activeQuestionIndex !== 0 &&
					selectedAnswer !== correctAnswer &&
					selectedAnswer
				) {
					setPoints(points - 20);
				}
			}
			setSelectedAnswer("");
		}
	};
	const handleInputChange = (e) => {
		e.persist();
		setSelectedAnswer(e.target.value);
	};

	return answers ? (
		<form onSubmit={handleSubmit} className={styles["form"]}>
			<p className={styles["form__question"]}>{question}</p>
			<div className={styles["form__answers-wrapper"]}>
				{answers.map((answer) => {
					return (
						<label
							className={styles["form__answer"]}
							key={answer}
							htmlFor={answer}
						>
							{answer}
							<input
								id={answer}
								key={answer}
								type="radio"
								name="answer"
								value={answer}
								checked={selectedAnswer === answer}
								onChange={handleInputChange}
							/>
						</label>
					);
				})}
			</div>
			<button className={styles["form__button"]} type="submit">
				Answer
			</button>
		</form>
	) : (
		<h3 className={styles["form"]}>Loading Question and answers...</h3>
	);
};

export default Question;
