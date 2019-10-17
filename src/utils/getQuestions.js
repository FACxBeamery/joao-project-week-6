const getQuestions = ({ triviaCategory, triviaDifficulty }) => {
	return new Promise((resolve, reject) => {
		fetch(
			`https://opentdb.com/api.php?amount=20
			${triviaCategory !== "any" ? `&category=${triviaCategory}` : ``}${
				triviaCategory === "19" || triviaDifficulty === "any"
					? ""
					: `&difficulty=${triviaDifficulty}`
			}&type=multiple&encode=url3986`
		)
			.then((res) => resolve(res.json()))
			.catch((err) => reject(err));
	});
};

export default getQuestions;
