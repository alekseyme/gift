import React from 'react';
import api from 'api';
import Item from 'components/Item';
import Loader from 'components/Loader';
import Header from 'components/Header';
import EndGame from 'components/EndGame';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';

const Home = () => {
	const [items, setItems] = React.useState(null);
	const [isFinish, setIsFinish] = React.useState(false);
	const [nextAttempt, setNextAttempt] = React.useState(false);

	const getItems = async () => {
		try {
			const { data } = await api().get('/items');
			const rspTime = await api().get('/time');
			setItems(data);
			if (data.filter((item) => item.task.completed).length > 5) {
				setIsFinish(true);
			}
			setNextAttempt(rspTime.data[0].nextAttempt);
		} catch (error) {
			console.log(error);
		}
	};
	React.useEffect(() => {
		getItems();
	}, []);

	return (
		<>
			{nextAttempt && dayjs(nextAttempt).diff(dayjs()) > 0 && !isFinish && (
				<div className="alert-time">
					<div>
						Следующую коробку можно будет открыть{' '}
						<b style={{ marginLeft: 6 }}>
							{dayjs(nextAttempt).format('D.MM.YYYY HH:mm')}
						</b>
						<Link
							className="yoursp"
							to="/gift/yoursurprises"
							style={{
								position: 'absolute',
								bottom: 30,
							}}>
							Твои сюрпризы
						</Link>
					</div>
				</div>
			)}
			<Header count={items?.filter((item) => item.task.completed).length} />
			{isFinish ? (
				<EndGame items={items} />
			) : (
				<div className="surprise-content">
					{items ? items.map((item) => <Item key={item.id} {...item} />) : <Loader />}
				</div>
			)}
		</>
	);
};

export default Home;
