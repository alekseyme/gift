import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ count }) => {
	const actualCount = 6 - count || 0;

	return (
		<div className="surprise-item-header main-header">
			<Link className="yoursp" to="/gift/yoursurprises">
				Твои сюрпризы
			</Link>
			<div
				style={{
					textAlign: 'right',
					fontSize: 16,
				}}>
				Осталось сюрпризов:{' '}
				<span
					style={{
						color: '#3c4fe0',
						fontSize: 18,
					}}>
					{actualCount}
				</span>
			</div>
		</div>
	);
};

export default Header;
