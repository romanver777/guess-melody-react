import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player';
import Mistakes from '../mistakes/mistakes';
import Timer from '../timer/timer';

class GenreScreen extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			checked: [],
			disabled: true,
			currentPlayer: null,
			currentButton: null,
		}
	}

	handleClick = (items) => {

		const classNamePlay = `track__button track__button--pause`;
		const classNamePause = `track__button track__button--play`;

		if (this.state.currentPlayer) {

			this.state.currentPlayer.pause();
			this.state.currentButton.className = classNamePause;

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

	handleChange = (e) => {

		const checkedArr = this.state.checked;
		const id = e.target.id.slice(`answer-`.length);

		if (checkedArr.indexOf(id) < 0) {

			checkedArr.push(id);

		} else {

			checkedArr.splice(checkedArr.indexOf(id), 1);
		}

		this.setState((prevState) => ({
			checked: checkedArr,
			disabled: !checkedArr.length
		}));
	};

	render () {
		const {quest, time, mistakes, onTik, maxMistakes, onAnswer} = this.props;

		return (
			<section className="game game--genre">
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

					<form className="game__tracks" onSubmit={() => onAnswer(this.state.checked)}>

						{quest.options.map((item, ind) => {

							return (
								<div className="track" key={`track-${item.id}`}>

									<AudioPlayer src={item.src}
															 onClick={this.handleClick}/>

									<div className="game__answer">
										<input className="game__input visually-hidden" type="checkbox" name={`answer-${item.id}`}
													 value={ind}
													 onChange={this.handleChange} id={`answer-${item.id}`}/>
										<label className="game__check" htmlFor={`answer-${item.id}`}>Отметить</label>
									</div>
								</div>
							);
						})}

						<button className="game__submit button" type="submit"
										disabled={this.state.disabled}>Ответить</button>
					</form>
				</section>
			</section>
		);
	}
}

GenreScreen.propTypes = {
	quest: PropTypes.object.isRequired,
	onAnswer: PropTypes.func.isRequired
};

export default GenreScreen;
