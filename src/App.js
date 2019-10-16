import React, { useState } from "react";
import "./App.css";
import TriviaConfigForm from "./components/TriviaConfigForm";
import Trivia from "./components/Trivia";

function App() {
	const [triviaState, setTriviaState] = useState("configuringForm");
	const [configDetails, setConfigDetails] = useState({});
	return (
		<div className="App">
			{triviaState === "configuringForm" ? (
				<TriviaConfigForm
					formState={0}
					setTriviaState={setTriviaState}
					setConfigDetails={setConfigDetails}
				/>
			) : null}
			{triviaState === "startTrivia" ? <Trivia /> : null}
		</div>
	);
}

export default App;
