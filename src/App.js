import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TriviaConfigForm from "./components/TriviaConfigForm";
import Trivia from "./components/Trivia";
import Progress from "./components/Progress";

function App() {
	const [triviaState, setTriviaState] = useState("configuringForm");
	const [configDetails, setConfigDetails] = useState({});
	const [points, setPoints] = useState(20);
	const [progress, setProgress] = useState("playing");
	return (
		<div className="App">
			<Header points={points} />
			{triviaState === "configuringForm" ? (
				<TriviaConfigForm
					formState={0}
					setTriviaState={setTriviaState}
					triviaState={triviaState}
					setConfigDetails={setConfigDetails}
				/>
			) : null}
			{triviaState === "startTrivia" ? (
				<>
					<Progress points={points} setTriviaState={setTriviaState} />
					{progress === "playing" ? (
						<Trivia
							configDetails={configDetails}
							points={points}
							setPoints={setPoints}
							setProgress={setProgress}
						/>
					) : null}
				</>
			) : null}
		</div>
	);
}

export default App;
