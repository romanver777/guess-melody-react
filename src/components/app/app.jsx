import React from 'react';
import WellcomeScreen from '../wellcome-screen/wellcome-screen.jsx';
import ArtistScreen from '../artist-screen/artist-screen';
import GenreScreen from '../genre-screen/genre-screen';

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
			currentQuest: -1
		};
	}

	render() {

		const {quests} = this.props;
		const {currentQuest} = this.state;

		return App.getLevel(currentQuest, this.props, () => {
			this.setState((prevState) => {

				const nextIndex = prevState.currentQuest + 1;
				const isEnd = nextIndex > quests.length - 1;

				return {
					...prevState,
					currentQuest: !isEnd ? nextIndex : -1,
				};
			});
		});
	}
}

export default App;
