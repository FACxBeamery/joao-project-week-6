const getQuestions = ({ triviaCategory, triviaDifficulty }) => {
	let categoryChosen = "";
	let difficultyChosen = "";
	if (triviaCategory !== "any") {
		categoryChosen = `&category=${triviaCategory}`;
	}
	if (!(triviaCategory === "19" || triviaDifficulty === "any")) {
		difficultyChosen = `&category=${triviaCategory}`;
	}

	return new Promise((resolve, reject) => {
		fetch(
			`https://opentdb.com/api.php?amount=20
			${categoryChosen}${difficultyChosen}
			&type=multiple&encode=url3986`
		)
			.then((res) => resolve(res.json()))
			.catch((err) => reject(err));
	});
};

export default getQuestions;
