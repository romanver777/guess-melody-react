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

const getObjStyle = (str) => {

	const styles = str.split(";");

	const svgStyles = styles.reduce((obj, item, i) => {

		const [key, value] = item.split(":");
		const updatedkey = key.replace(/-([a-z])/ig, s => s.slice(-1).toUpperCase());

		obj[updatedkey] = value;

		return obj;
	}, {});

	return svgStyles;
};

class Timer extends React.PureComponent {

	constructor (props) {
		super(props);

		this.timer = null;
	}

	startTimer = (onTik) => {

		this.timer = setTimeout(() => {

			onTik(this.props.time, this.props.mistakes, this.props.maxMistakes);

		}, 1000);
	};

	stopTimer = () => clearTimeout(this.timer);

	componentWillUnmount () {
		this.stopTimer();
	}

	render () {

		const {time, onTik} = this.props;

		const min = addZero(convertStoreTime(time).min);
		const sec = addZero(convertStoreTime(time).sec);

		const initTime = 300;
		const radius = 370;
		const strokeCircleWidth = Math.round(2 * Math.PI * radius);
		let currentLinePos = strokeCircleWidth - (strokeCircleWidth * time / initTime);

		const svgStyleStr = `strokeDasharray: ${strokeCircleWidth};strokeDashoffset: ${currentLinePos}`;

		this.startTimer(onTik);

		return (
			<React.Fragment>
				<svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
					<circle className="timer__line" cx="390" cy="390" r="370"
							style={getObjStyle(svgStyleStr)}/>
				</svg>

				<div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
					<span className="timer__mins">{min}</span>
					<span className="timer__dots">:</span>
					<span className="timer__secs">{sec}</span>
				</div>
			</React.Fragment>
		);
	}
}

Timer.propTypes = {
	time: PropTypes.number.isRequired,
	onTik: PropTypes.func,
};

export default Timer;
