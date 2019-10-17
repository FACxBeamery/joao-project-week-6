import React, { useState } from "react";
import "./App.css";
import TriviaConfigForm from "./components/TriviaConfigForm";
import Trivia from "./components/Trivia";
import Progress from "./components/Progress";

function App() {
	const [triviaState, setTriviaState] = useState("configuringForm");
	const [configDetails, setConfigDetails] = useState({});
	const [points, setPoints] = useState(20);
	return (
		<div className="App">
			{triviaState === "configuringForm" ? (
				<TriviaConfigForm
					formState={0}
					setTriviaState={setTriviaState}
					triviaState={triviaState}
					setConfigDetails={setConfigDetails}
				/>
			) : null}
			{triviaState === "startTrivia" && (points > 0 && points < 100) ? (
				<>
					<Progress points={points} setTriviaState={setTriviaState} />
					<Trivia
						configDetails={configDetails}
						points={points}
						setPoints={setPoints}
					/>
				</>
			) : null}
			{points <= 0 ? (
				<>
					<Progress points={points} />
				</>
			) : null}
			{points === 100 ? (
				<>
					<Progress points={points} />
				</>
			) : null}
		</div>
	);
}

export default App;
