import React, { useState, useEffect } from "react";

import Question from "./Question";

import getQuestions from "../utils/getQuestions";
import { shuffleArray } from "../utils/shuffleArray";

const Trivia = ({ configDetails, points, setPoints }) => {
	const [triviaQuestions, setTriviaQuestions] = useState([]);
	const [activeQuestion, setActiveQuestion] = useState({});
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
	useEffect(() => {
		getQuestions(configDetails).then((data) => {
			console.log(data);

			setTriviaQuestions(data.results);
			setActiveQuestion({
				answers: shuffleArray([
					data.results[activeQuestionIndex].correct_answer,
					...data.results[activeQuestionIndex].incorrect_answers
				]),
				...data.results[activeQuestionIndex]
			});
			console.log(activeQuestion);
		});
	}, []);

	const {
		answers,
		category,
		type,
		difficulty,
		question,
		correct_answer,
		incorrect_answers
	} = activeQuestion;

	return activeQuestion ? (
		<Question
			question={question}
			answers={answers}
			incorrectAnswers={incorrect_answers}
			correctAnswer={correct_answer}
			index={activeQuestion}
		/>
	) : (
		<h3>loading...</h3>
	);
};

export default Trivia;
