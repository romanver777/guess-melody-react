import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player';
import Mistakes from '../mistakes/mistakes';
import Timer from '../timer/timer';

class ArtistScreen extends React.PureComponent {

	constructor (props) {
		super(props);

		this.state = {
			currentPlayer: null,
			currentButton: null,
		}
	}

	handleClick = (items) => {

		const classNamePlay = `track__button track__button--pause`;
		const classNamePause = `track__button track__button--play`;

		if (this.state.currentPlayer) {

			this.state.currentPlayer.pause();

			this.setState((prevState) => ({

					currentButton: prevState.currentButton.className = classNamePause,
				})
			);

			if (this.state.currentPlayer === items[0]) {

				this.setState({
					currentPlayer: null,
					currentButton: null,
				});

				return;
			}
		}

		items[0].play();
		items[1].className = classNamePlay;

		this.setState({
			currentPlayer: items[0],
			currentButton: items[1],
		});
	};

	render () {
		const {quest, time, mistakes, onTik, onAnswer} = this.props;
		const src = quest.options[quest.answer.id].src;

		return (
			<section className="game game--artist">
				<header className="game__header">
					<a className="game__back">
						<span className="visually-hidden">Сыграть ещё раз</span>
						<img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
					</a>
					
					<Timer time={time}
								 onTik={onTik}
					/>

					<Mistakes mistakes={mistakes}/>
				</header>

				<section className="game__screen">
					<h2 className="game__title">{quest.title}</h2>
					<div className="game__track">

						<AudioPlayer src={src}
												 onClick={this.handleClick}/>

					</div>

					<form className="game__artist">

						{quest.options.map((item) => {

							return (
								<div className="artist" key={`artist-${item.id}`}>
									<input className="artist__input visually-hidden"
												 type="radio" name="answer"
												 value={`artist-${item.id}`}
												 id={`answer-${item.id}`}
												 onClick={() => {onAnswer(item)}}
									/>
									<label className="artist__name" htmlFor={`answer-${item.id}`}>
										<div className="artist__picture-wrap">
											<img className="artist__picture" src={item.imgSrc} alt={item.title}/>
										</div>
										{item.title}
									</label>
								</div>
							)
						})}

					</form>
				</section>
			</section>
		)
	}
}

ArtistScreen.propTypes = {
	quest: PropTypes.object.isRequired,
	onAnswer: PropTypes.func.isRequired
};

export default ArtistScreen;
