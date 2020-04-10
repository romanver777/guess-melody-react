import React from 'react';
import PropTypes from 'prop-types';

const GenreScreen = (props) => {

	const {quest, onAnswer} = props;

	return (
		<section className="game game--genre">
			<header className="game__header">
				<a className="game__back">
					<span className="visually-hidden">Сыграть ещё раз</span>
					<img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
				</a>

				{/*<svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
					{/*<circle className="timer__line" cx="390" cy="390" r="370"*/}
									{/*style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>*/}
				{/*</svg>*/}

				<div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
					<span className="timer__mins">05</span>
					<span className="timer__dots">:</span>
					<span className="timer__secs">00</span>
				</div>

				<div className="game__mistakes">
					<div className="wrong"></div>
					<div className="wrong"></div>
					<div className="wrong"></div>
				</div>
			</header>

			<section className="game__screen">
				<h2 className="game__title">{quest.title}</h2>

				<form className="game__tracks" onSubmit={onAnswer}>

					{quest.options.map((item, index) => {

						return (
							<div className="track" key={`track-${item.id}`}>
								<button className="track__button track__button--play" type="button"/>
								<div className="track__status">
									<audio/>
								</div>
								<div className="game__answer">
									<input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`} id={`answer-${index}`} />
									<label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
								</div>
							</div>
						);
					})}

					<button className="game__submit button" type="submit">Ответить</button>
				</form>
			</section>
		</section>
	);
};

GenreScreen.propTypes = {
	quest: PropTypes.object.isRequired,
	onAnswer: PropTypes.func.isRequired
};

export default GenreScreen;