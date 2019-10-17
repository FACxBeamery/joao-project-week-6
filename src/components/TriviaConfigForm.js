import React, { useState } from "react";

import Option from "./Option";

import styles from "./TriviaConfigForm.module.css";

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
		<form className={styles.form} onSubmit={handleSubmit}>
			<label className={styles.form__label} htmlFor="userName">
				What's your name?{" "}
			</label>
			<input
				required
				type="text"
				name="userName"
				id="userName"
				onChange={handleInputChange}
				defaultValue={inputs.userName}
				className={
					inputs.userName !== ""
						? `${styles.form__input} ${styles.form__text} ${styles.form__filled}`
						: `${styles.form__input} ${styles.form__text} ${styles.form__error}`
				}
			></input>
			{inputs.userName === "" ? (
				<p className={styles.form__message}>
					This field is required and needs to be at least 2 chars
					long.
				</p>
			) : null}

			<label className={styles.form__label} htmlFor="triviaCategory">
				Select Category:{" "}
			</label>
			<select
				required
				className={`${styles.form__input} ${styles.form__select} `}
				name="triviaCategory"
				defaultValue={inputs.categoryChosen}
				onChange={handleInputChange}
			>
				{triviaCategories.map(({ value, name }, i) => {
					return <Option key={value} value={value} name={name} />;
				})}
			</select>

			<label className={styles.form__label} htmlFor="triviaDifficulty">
				Select Difficulty:{" "}
			</label>
			<select
				required
				className={`${styles.form__input} ${styles.form__select} `}
				name="triviaDifficulty"
				defaultValue={inputs.difficultyLevel}
				onChange={handleInputChange}
			>
				{triviaDificulties.map(({ value, name }, i) => {
					return <Option key={value} value={value} name={name} />;
				})}
			</select>
			<button className={styles["form__button"]} type="submit">
				start trivia
			</button>
		</form>
	);
};

export default TriviaConfigForm;
