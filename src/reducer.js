const isArtistAnswerCorrect = (answer, quest) => {

};

const isGenreAnswerCorrect = (answer, quest) => {

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
	}
};

const initialState = {
	questNumber: -1,
	mistakes: 0,
};

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case `INCREMENT_QUESTNUMBER`: return Object.assign({}, state, {
			questNumber: state.questNumber + action.payload,
		});

		case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
			mistakes: state.mistakes + action.payload,
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