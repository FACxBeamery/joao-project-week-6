import React, { useState } from "react";

import Option from "./Option";

import "./TriviaConfigForm.css";

const TriviaConfigForm = ({ setTriviaState, setConfigDetails }) => {
	const [inputs, setInputs] = useState({});

	const handleSubmit = (event) => {
		if (event) {
			event.preventDefault();
			setTriviaState("startTrivia");
			setConfigDetails(inputs);
		}
	};
	const handleInputChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value
		}));
	};
	const triviaCategories = [
		{ value: "any", name: "Any Category" },
		{ value: "9", name: "General Knowledge" },
		{ value: "12", name: "Entertainment: Music" },
		{ value: "18", name: "Science: Computers" },
		{ value: "19", name: "Science: Mathematics" }
	];
	const triviaDificulties = [
		{ value: "any", name: "Any Difficulty" },
		{ value: "easy", name: "Easy" },
		{ value: "medium", name: "Medium" },
		{ value: "hard", name: "Hard" }
	];
	return (
		<form className="form" onSubmit={handleSubmit}>
			<label className="form__label" htmlFor="userName">
				What's your name?{" "}
			</label>
			<input
				type="text"
				name="userName"
				id="userName"
				onChange={handleInputChange}
				defaultValue={inputs.userName}
				className={
					inputs.userName === ""
						? "form__input form__input--error form__input-text"
						: "form__input form__input-text"
				}
			></input>

			<label className="form__label" htmlFor="triviaCategory">
				Select Category:{" "}
			</label>
			<select
				className="form__input"
				name="triviaCategory"
				defaultValue={inputs.categoryChosen}
				onChange={handleInputChange}
			>
				{triviaCategories.map(({ value, name }, i) => {
					return <Option key={value} value={value} name={name} />;
				})}
			</select>

			<label className="form__label" htmlFor="triviaDifficulty">
				Select Difficulty:{" "}
			</label>
			<select
				className="form__input"
				name="triviaDifficulty"
				defaultValue={inputs.difficultyLevel}
				onChange={handleInputChange}
			>
				{triviaDificulties.map(({ value, name }, i) => {
					return <Option key={value} value={value} name={name} />;
				})}
			</select>
			<button type="submit">submit</button>
		</form>
	);
};

export default TriviaConfigForm;
