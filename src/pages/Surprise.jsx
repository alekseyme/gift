import React from 'react';
import api from 'api';
import { Link, useParams } from 'react-router-dom';
import Quastion from 'components/Quastion';
import Loader from 'components/Loader';

const Surprise = () => {
	const { id } = useParams();
	const [surprise, setSurprise] = React.useState(null);

	const getSurpriseById = async (id) => {
		try {
			const { data } = await api().get('/items/' + id);
			setSurprise(data);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		getSurpriseById(id); // eslint-disable-next-line
	}, []);

	return (
		<>
			{surprise ? (
				<div className="surprise-item">
					<div className="surprise-item-header">
						<Link className="back-btn" to="/gift">
							❮
						</Link>

						{surprise.name}
					</div>
					<Quastion {...surprise} />
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Surprise;
