import React from 'react';
import api from 'api';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';

const YourSurprises = () => {
	const [surprises, setSurprises] = React.useState(null);

	const getCompletedSurprises = async (id) => {
		try {
			const { data } = await api().get('/items');
			const completed = data.filter((surprise) => surprise.task.completed);
			setSurprises(completed);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		getCompletedSurprises(); // eslint-disable-next-line
	}, []);

	console.log(surprises);

	return (
		<>
			{surprises ? (
				<div className="surprise-item">
					<div className="surprise-item-header">
						<Link className="back-btn" to="/gift">
							❮
						</Link>
						Твои сюрпризы
					</div>
					<div
						style={{
							paddingBottom: 44,
							paddingLeft: 30,
							paddingRight: 30,
						}}>
						{surprises.map((surprise) => (
							<div
								key={surprise.id}
								className="surprise-box surprise-box-final"
								style={{
									margin: '44px auto 0 auto',
								}}>
								{surprise.task.successItem}
							</div>
						))}
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default YourSurprises;
