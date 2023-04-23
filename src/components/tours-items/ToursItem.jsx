import PropTypes from 'prop-types';

import './ToursItem.css';
import clsx from 'clsx';
import { LIGHT, DARK } from '../../constants/index';

const ToursItem = ({ id=1, name="dumb", price=0, continent="Europe", description="Any where in Europe", theme="light", onDelete }) => {
	return (
		<li
			className={clsx('tours-item', {
				'dark-theme': theme === LIGHT,
				'light-theme': theme === DARK,
			})}>
			<p>Name:{name}</p>
			<p>Price:{price}</p>
			<p>Continent:{continent}</p>
			{description && <p>Description:{description}</p>}
			<button onClick={() => onDelete(id)}>Delete</button>
		</li>
	);
};

export default ToursItem;

ToursItem.propTypes = {
	//name: PropTypes.string.isRequired,
	// price: PropTypes.string.isRequired,
	//continent: PropTypes.string.isRequired,
	//description: PropTypes.string,
};