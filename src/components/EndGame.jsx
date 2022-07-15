import React from 'react';
import CancelItem from 'components/CancelItem';

const EndGame = ({ items }) => {
	const outItems = items.filter((item) => !item.task.completed);

	return (
		<div
			style={{
				padding: '40px 50px',
			}}>
			<>
				<div
					style={{
						textAlign: 'center',
						fontSize: 22,
					}}>
					Получены все возможные сюрпризы
					<span
						style={{
							fontSize: 30,
							marginLeft: 10,
						}}>
						👍
					</span>
				</div>
				<p
					style={{
						fontSize: 22,
						marginTop: 20,
						maxWidth: 600,
						marginLeft: 'auto',
						marginRight: 'auto',
						marginBottom: 40,
						textAlign: 'center',
					}}>
					Можешь проверить то, что осталось в коробках
				</p>
				<div>
					{outItems.map((item) => (
						<CancelItem key={item.id} {...item} />
					))}
				</div>
			</>
		</div>
	);
};

export default EndGame;
