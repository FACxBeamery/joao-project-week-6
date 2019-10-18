import React, { useState } from "react";
import styles from "./App.module.css";
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
		<div className={styles.app}>
			<Header configDetails={configDetails} />
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
					<Progress
						setPoints={setPoints}
						points={points}
						setTriviaState={setTriviaState}
						setConfigDetails={setConfigDetails}
					/>
					{progress === "playing" && points < 100 && points > 0 ? (
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
