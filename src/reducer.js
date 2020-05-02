const isArtistAnswerCorrect = (answer, quest) => {

	return +answer.id === quest.answer.id
};

const isGenreAnswerCorrect = (answer, quest) => {

	if (answer.length !== quest.answer.id.length) return false;

	for (let it of answer) {

		if (quest.answer.id.indexOf(it.toString()) < 0) {

			return false;
		}
	}
	return true;
};

const ActionCreator = {
	incrementQuestNumber: () => ({
		type: `INCREMENT_QUESTNUMBER`,
		payload: 1,
	}),
	incrementMistakes: (answer, quest, mistakes, maxMistakes) => {
		let isCorrect = false;

		switch (quest.type) {
			case `artist`: isCorrect = isArtistAnswerCorrect(answer, quest);
				break;
			case `genre`: isCorrect = isGenreAnswerCorrect(answer, quest);
				break;
		}
		if (!isCorrect && (mistakes + 1) > maxMistakes) {

			return {
				type: `RESET`,
			}
		}

		return {
			type: `INCREMENT_MISTAKES`,
			payload: isCorrect ? 0 : 1,
		}
	},
	decrementTime: (time) => {

		if (time === 0) {

			return {
				type: `RESET`,
			}
		}
		return {
			type: `DECREMENT_TIME`,
			payload: 1,
		}
	},
};

const initialState = {
	questNumber: -1,
	mistakes: 0,
	time: 300,
};

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case `INCREMENT_QUESTNUMBER`: return Object.assign({}, state, {
			questNumber: state.questNumber + action.payload,
		});

		case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
			mistakes: state.mistakes + action.payload,
		});

		case `DECREMENT_TIME`: return Object.assign({}, state, {
			time: state.time - action.payload,
		});

		case `RESET`: return Object.assign({}, initialState);
	}

	return state;
};

export {
	ActionCreator,
	isArtistAnswerCorrect,
	isGenreAnswerCorrect,
	reducer
}
