import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, task }) => {
	return (
		<Link
			className={`${task.completed ? 'surprise-box surprise-box-completed' : 'surprise-box'}`}
			to={`${task.completed ? '#' : `/items/${id}`}`}>
			🎁 {name}
		</Link>
	);
};

export default Item;
