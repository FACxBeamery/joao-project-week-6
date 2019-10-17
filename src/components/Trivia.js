import React, { useState, useEffect } from "react";

import Question from "./Question";

import getQuestions from "../utils/getQuestions";
import { shuffleArray } from "../utils/shuffleArray";

const Trivia = ({ configDetails, points, setPoints, setProgress }) => {
	const [triviaQuestions, setTriviaQuestions] = useState([]);
	const [activeQuestion, setActiveQuestion] = useState({});
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
	useEffect(() => {
		getQuestions(configDetails).then((data) => {
			setTriviaQuestions(data.results);
			const unescapedAnswers = [
				...data.results[activeQuestionIndex].incorrect_answers.map(
					(answer) => unescape(answer)
				),
				unescape(data.results[activeQuestionIndex].correct_answer)
			];

			setActiveQuestion({
				answers: shuffleArray(unescapedAnswers),
				questionName: unescape(
					data.results[activeQuestionIndex].question
				),
				correctAnswer: unescape(
					data.results[activeQuestionIndex].correct_answer
				)
			});
		});
	}, [activeQuestionIndex]);

	const { answers, questionName, correctAnswer } = activeQuestion;

	return activeQuestion ? (
		<Question
			question={questionName}
			answers={answers}
			correctAnswer={correctAnswer}
			index={activeQuestion}
			setPoints={setPoints}
			points={points}
			setActiveQuestionIndex={setActiveQuestionIndex}
			activeQuestionIndex={activeQuestionIndex}
			setProgress={setProgress}
		/>
	) : (
		<h3>loading...</h3>
	);
};

export default Trivia;
