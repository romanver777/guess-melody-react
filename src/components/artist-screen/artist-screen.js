import React from 'react';
import PropTypes from 'prop-types';

const ArtistScreen = (props) => {

	const {quest, onAnswer} = props;

	return (
		<section className="game game--artist">
			<header className="game__header">
				<a className="game__back">
					<span className="visually-hidden">Сыграть ещё раз</span>
					<img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
				</a>

				{/*<svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
					{/*<circle className="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />*/}
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
				<div className="game__track">
					<div className="track">
						<button className="track__button track__button--play" type="button"/>
						<div className="track__status">
							<audio/>
						</div>
					</div>
				</div>

				<form className="game__artist" onChange={onAnswer}>

					{quest.options.map((item) => {

						return (
							<div className="artist" key={`artist-${item.id}`}>
								<input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${item.id}`} id={`answer-${item.id}`}/>
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
};

ArtistScreen.propTypes = {
	quest: PropTypes.object.isRequired,
	onAnswer: PropTypes.func.isRequired
};

export default ArtistScreen;