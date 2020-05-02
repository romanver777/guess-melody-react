import React from 'react';
import PropTypes from 'prop-types';

const convertStoreTime = (time) => {

	const min = Math.trunc(time / 60);
	const sec = Math.round( (time / 60 - min) * 60);

	return {min, sec}
};

const addZero = (time) => {

	if (time < 10) time = `0${time}`;

	return time;
};

class Timer extends React.PureComponent {

	constructor (props) {
		super(props);

		this.timer = null;
	}

	startTimer = (onTik) => {

		this.timer = setTimeout(() => {

			this.stopTimer();
			onTik(this.props.time);

		}, 1000);
	};

	stopTimer = () => clearInterval(this.timer);

	render () {

		const {time, onTik} = this.props;

		const min = addZero(convertStoreTime(time).min);
		const sec = addZero(convertStoreTime(time).sec);

		this.startTimer(onTik);

		return (
			// {/*<svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
			// {/*<circle className="timer__line" cx="390" cy="390" r="370"*/}
			// {/*style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>*/}
			// {/*</svg>*/}

			<div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
				<span className="timer__mins">{min}</span>
				<span className="timer__dots">:</span>
				<span className="timer__secs">{sec}</span>
			</div>
		);
	}
}

Timer.propTypes = {
	time: PropTypes.number.isRequired,
	onTik: PropTypes.func,
};

export default Timer;
