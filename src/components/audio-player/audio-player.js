import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {

	constructor(props) {
		super(props);

		this.audio = React.createRef();
		this.button = React.createRef();
	}

	render () {

		const {src, onClick} = this.props;

		return (
				<div className="track">
					<button className="track__button track__button--play"
									type="button"
									ref={this.button}
									onClick={() => onClick([this.audio.current, this.button.current])}/>
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
	onClick: PropTypes.func.isRequired
};

export default AudioPlayer;
