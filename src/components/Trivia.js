import React, { useState, useEffect } from "react";

import Question from "./Question";

import getQuestions from "../utils/getQuestions";
import { shuffleArray } from "../utils/shuffleArray";

const Trivia = ({ configDetails, points, setPoints, setProgress }) => {
	const [triviaQuestions, setTriviaQuestions] = useState(undefined);
	useEffect(() => {
		getQuestions(configDetails).then((data) => {
			setTriviaQuestions(shuffleArray(data.results));
		});
	}, []);

	return triviaQuestions ? (
		<Question
			questions={triviaQuestions}
			setPoints={setPoints}
			points={points}
			setProgress={setProgress}
		/>
	) : (
		<h3>loading...</h3>
	);
};

export default Trivia;
