import React from 'react';
import WellcomeScreen from '../wellcome-screen/wellcome-screen.jsx';
import ArtistScreen from '../artist-screen/artist-screen';
import GenreScreen from '../genre-screen/genre-screen';
import PropTypes from 'prop-types';

class App extends React.PureComponent {

	static getLevel(currentQuest, props, onAnswer) {

		if (currentQuest < 0) {

			const {time, mistakes} = props;

			return <WellcomeScreen
				time={time}
				mistakes={mistakes}
				onClick={onAnswer}
			/>
		}
		const {quests} = props;

		switch (quests[currentQuest].type) {

			case `artist`: return <ArtistScreen
															quest={quests[currentQuest]}
															onAnswer={onAnswer}
														/>;
			case `genre`: return <GenreScreen
														quest={quests[currentQuest]}
														onAnswer={onAnswer}
														/>;
		}

		return null;
	};

	constructor(props) {
		super(props);

		this.state = {
			currentQuest: -1,
			answers: [],
		}
	}

	render() {

		const {quests} = this.props;
		const {currentQuest} = this.state;

		return App.getLevel(currentQuest, this.props, (e) => {

			const id = e.target ? e.target.id.slice('answer-'.length) : e;
			const answerArr = this.state.answers;

			if (id) answerArr.push(id);

			this.setState((prevState) => {

				const nextIndex = prevState.currentQuest + 1;
				const isEnd = nextIndex > quests.length - 1;

				return {
					currentQuest: !isEnd ? nextIndex : -1,
					answers: answerArr
				};
			});
		});
	}
}

App.propTypes = {
	time: PropTypes.number.isRequired,
	mistakes: PropTypes.number.isRequired,
	quests: PropTypes.array.isRequired
};

export default App;
