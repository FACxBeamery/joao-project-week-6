import React, { useState } from "react";
import "./App.css";
import TriviaConfigForm from "./components/TriviaConfigForm";
import Trivia from "./components/Trivia";
import Progress from "./components/Progress";

function App() {
	const [triviaState, setTriviaState] = useState("configuringForm");
	const [configDetails, setConfigDetails] = useState({});
	const [points, setPoints] = useState(0);
	return (
		<div className="App">
			{triviaState === "configuringForm" ? (
				<TriviaConfigForm
					formState={0}
					setTriviaState={setTriviaState}
					setConfigDetails={setConfigDetails}
				/>
			) : null}
			{triviaState === "startTrivia" ? (
				<>
					<Progress points={points} />
					<Trivia
						configDetails={configDetails}
						points={points}
						setPoints={setPoints}
					/>
				</>
			) : null}
		</div>
	);
}

export default App;
