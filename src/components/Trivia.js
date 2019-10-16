import React, { useState, useEffect } from "react";

import Question from "./Question";

import getQuestions from "../utils/getQuestions";

const Trivia = ({ configDetails, points, setPoints }) => {
	const [triviaQuestions, setTriviaQuestions] = useState([]);
	const [activeQuestion, setActiveQuestion] = useState({});
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
	useEffect(() => {
		// console.log(configDetails);

		getQuestions(configDetails).then((data) => {
			console.log(data);

			setTriviaQuestions(data.results);
			setActiveQuestion(data.results[activeQuestionIndex]);
		});

		// return (data) => {
		// 	console.log(data);
		// };
	}, []);

	const {
		category,
		type,
		difficulty,
		question,
		correct_answer,
		incorrect_answers
	} = activeQuestion;

	return triviaQuestions ? (
		<Question question={question} index={activeQuestion} />
	) : (
		<h3>loading...</h3>
	);
};

export default Trivia;
