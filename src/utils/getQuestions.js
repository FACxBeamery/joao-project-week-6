const getQuestions = ({ triviaCategory, triviaDifficulty }) => {
	console.log(triviaCategory);

	return new Promise((resolve, reject) => {
		fetch(
			`https://opentdb.com/api.php?amount=20&category=${triviaCategory}${
				triviaCategory !== "19" ? `&difficulty=${triviaDifficulty}` : ""
			}&type=multiple&encode=url3986`
		)
			.then((res) => resolve(res.json()))
			.catch((err) => reject(err));
	});
};

export default getQuestions;
