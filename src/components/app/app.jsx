import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer';
import WellcomeScreen from '../wellcome-screen/wellcome-screen.jsx';
import ArtistScreen from '../artist-screen/artist-screen';
import GenreScreen from '../genre-screen/genre-screen';

const Type = {

};

class App extends React.PureComponent {

	_getLevel(quest) {

		if (!quest) {

			const {time, maxMistakes, onWelcomeClick} = this.props;

			return <WellcomeScreen
				time={time}
				mistakes={maxMistakes}
				onClick={onWelcomeClick}
			/>
		}
		const {mistakes, maxMistakes, onUserAnswer} = this.props;

		switch (quest.type) {

			case `artist`:
				return <ArtistScreen
					quest={quest}
					mistakes={mistakes}
					maxMistakes={maxMistakes}
					onAnswer={(answer) => onUserAnswer(answer, quest, mistakes, maxMistakes)}
				/>;
			case `genre`:
				return <GenreScreen
					quest={quest}
					mistakes={mistakes}
					maxMistakes={maxMistakes}
					onAnswer={(answer) => onUserAnswer(answer, quest, mistakes, maxMistakes)}
				/>;
		}

		return null;
	};

	render() {

		const {quests, questNumber} = this.props;

		return this._getLevel(quests[questNumber]);
	}
}

App.propTypes = {
	time: PropTypes.number.isRequired,
	mistakes: PropTypes.number.isRequired,
	maxMistakes: PropTypes.number.isRequired,
	quests: PropTypes.array.isRequired,
	questNumber: PropTypes.number.isRequired,
	onUserAnswer: PropTypes.func.isRequired,
	onWelcomeClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
	questNumber: state.questNumber,
	mistakes: state.mistakes,
});


const mapDispatchToProps = (dispatch) => ({

	onWelcomeClick: () => dispatch(ActionCreator.incrementQuestNumber()),

	onUserAnswer: (answer, quest, mistakes, maxMistakes) => {
		dispatch(ActionCreator.incrementQuestNumber());
		dispatch(ActionCreator.incrementMistakes(
			answer, quest, mistakes, maxMistakes
		));
	}
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
