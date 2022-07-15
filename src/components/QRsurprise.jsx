import React from 'react';

const QRsurprise = ({ successText, successItem }) => {
	const [visible, setVisible] = React.useState(false);
	const [position, setPosition] = React.useState({
		top: 0,
		left: 0,
	});

	React.useEffect(() => {
		const generateRandom = (max) => {
			let rand = Math.random() * max;
			rand = Math.floor(rand);
			return rand;
		};

		const width = window.innerWidth - 30;
		const height = window.innerHeight - 30;
		const fromLeft = generateRandom(width);
		const fromTop = generateRandom(height);
		setPosition({
			top: fromTop,
			left: fromLeft,
		});
	}, []);

	return (
		<div>
			<>
				<div
					style={{
						textAlign: 'center',
						fontSize: 22,
					}}>
					Поздравляю! Забирай сюрприз
					<span
						style={{
							fontSize: 30,
							marginLeft: 10,
						}}>
						❤️‍🔥
					</span>
					<br />
					Он спрятался где-то на странице
				</div>
				<div
					style={{
						textAlign: 'center',
						marginTop: 30,
					}}>
					{!visible && <span>{successText}</span>}
				</div>
				{!visible && (
					<div
						className="invis-surprise"
						onClick={() => setVisible(true)}
						style={{
							position: 'fixed',
							top: position.top,
							left: position.left,
							zIndex: 999,
						}}>
						<span
							style={{
								fontSize: 60,
							}}>
							🎁
						</span>
					</div>
				)}
				{visible && (
					<div
						className="surprise-box surprise-box-final"
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
						}}>
						{successItem === 'rivegauche.digift.ru/c/PwC3FvD' ||
						successItem === 'lamoda.digift.ru/c/9UFvW6d' ? (
							<a href={'https://' + successItem} target="_blank" rel="noreferrer">
								Тыкни меня
							</a>
						) : (
							successItem
						)}
					</div>
				)}
			</>
		</div>
	);
};

export default QRsurprise;
