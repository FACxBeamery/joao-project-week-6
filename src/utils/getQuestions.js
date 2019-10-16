// export const getQuestions = ({
// 	nrOfQuestions,
// 	categoryChosen,
// 	difficultyLevel
// }) => {

// };

const getQuestions = ({ nrOfquestions, triviaCategory, triviaDifficulty }) => {
	return new Promise((resolve, reject) => {
		fetch(
			`https://opentdb.com/api.php?amount=${nrOfquestions}&category=${triviaCategory}&difficulty=${triviaDifficulty}&type=multiple`
		)
			.then((res) => resolve(res.json()))
			.catch((err) => reject(err));
	});
};

export default getQuestions;
