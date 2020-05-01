import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = (props) => {

	const {mistakes} = props;

	return (
		<div className="game__mistakes">
			{ Array.from( new Array(mistakes), () => <div className="wrong"></div>) }
		</div>
	);
};

Mistakes.propTypes = {
	mistakes: PropTypes.number.isRequired
};

export default Mistakes;
