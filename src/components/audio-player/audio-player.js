import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {

	constructor(props) {
		super(props);

		this.audio = React.createRef();
		this.state = {
			isPaused: true,
		}
	}

	render () {

		const {src, onClick} = this.props;

		return (
				<div className="track">
					<button className={`track__button ${this.state.isPaused ? `track__button--play` : `track__button--pause`}`}
									type="button"
									onClick={() => onClick(this.audio.current)}/>
					<div className="track__status">
						<audio src={src}
										ref={this.audio}/>
					</div>
				</div>
		)
	}
}

AudioPlayer.propTypes = {
	src: PropTypes.string.isRequired,
	// isPause: PropTypes.bool.isRequired
};

export default AudioPlayer;
