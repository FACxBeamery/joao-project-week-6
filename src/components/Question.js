import React, { useState } from "react";

import "./Question.css";

const Question = ({
	question,
	answers,
	correctAnswer,
	incorrectAnswers,
	index
}) => {
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			if (selectedAnswer === "") {
				// score stays the same
				// stay on the same question
				// do styling
			} else {
				if (selectedAnswer === correctAnswer) {
					// increase score
					// move on to the next
				} else {
					// nope
				}
			}
		}
	};
	const handleInputChange = (e) => {
		e.persist();
		setSelectedAnswer(e.target.value);
	};

	return answers ? (
		<form onSubmit={handleSubmit} className="form">
			<p>{question}</p>
			<div className="form__answers-wrapper">
				{answers.map((answer) => {
					return (
						<label
							className="form__answer"
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
		</form>
	) : (
		<h3>Loading Question and answers</h3>
	);
};

export default Question;
