import React from "react";

const Question = ({
	category,
	type,
	difficulty,
	question,
	correct_answer,
	incorrect_answers,
	index
}) => {
	return (
		<>
			<p>question:{question}</p>
			{/* <p>answer: {question.correct_answer}</p> */}
		</>
	);
};

export default Question;
