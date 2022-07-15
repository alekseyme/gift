import React from 'react';
import api from 'api';
import QRsurprise from './QRsurprise';
import * as dayjs from 'dayjs';

const Quastion = ({ id, task }) => {
	const correctAnswer = task.answer; //Верный ответ 1

	const [completed, setCompleted] = React.useState(task.completed);
	const [answer, setAnswer] = React.useState('');
	const [failed, setFailed] = React.useState(false);
	const [thinking, setThinking] = React.useState(false);

	const checkAnswer = async () => {
		if (answer === correctAnswer) {
			const successTask = {
				task: { ...task, completed: true },
			};
			try {
				const { data } = await api().put('/items/' + id, successTask);
				const rspTime = await api().put('/time/1', {
					nextAttempt: dayjs().add(1, 'day'),
				});
				setCompleted(data.task.completed);
				console.log(rspTime.data);
			} catch (error) {
				console.log(error);
			}
		} else {
			setFailed(true);
			setTimeout(() => {
				setFailed(false);
			}, 2400);
		}
		setThinking(false);
	};

	const fakeRequest = () => {
		setThinking(true);
		setFailed(false);
		setTimeout(() => {
			checkAnswer();
		}, 3000);
	};

	return (
		<div
			style={{
				padding: '40px 50px',
			}}>
			{!completed ? (
				<>
					<div
						style={{
							textAlign: 'center',
							fontSize: 22,
						}}>
						Сначала нужно ответить на вопрос
						<span
							style={{
								fontSize: 30,
								marginLeft: 10,
							}}>
							🙂
						</span>
					</div>
					<p
						style={{
							fontSize: 22,
							marginTop: 100,
							maxWidth: 760,
							marginLeft: 'auto',
							marginRight: 'auto',
							marginBottom: 40,
							textAlign: 'center',
						}}>
						{task.question}
					</p>
					<div
						style={{
							textAlign: 'center',
						}}>
						<input
							className="answer-input"
							type="text"
							placeholder="Пиши ответ здесь..."
							value={answer}
							onChange={(e) => setAnswer(e.target.value)}
						/>
						<button className="answer-btn" onClick={fakeRequest}>
							Ответить
						</button>
					</div>
				</>
			) : (
				<QRsurprise {...task} />
			)}

			{thinking && (
				<div
					style={{
						fontSize: 22,
						marginTop: 100,
						marginBottom: 40,
						textAlign: 'center',
					}}>
					Проверяю...{' '}
					<span
						className="animate-round"
						style={{
							fontSize: 40,
							position: 'relative',
							marginLeft: 6,
							top: 6,
						}}>
						🧠
					</span>
				</div>
			)}
			{failed && (
				<div
					style={{
						fontSize: 22,
						marginTop: 100,
						marginBottom: 40,
						textAlign: 'center',
					}}>
					Не верно. Попробуй ещё раз{' '}
					<span
						style={{
							fontSize: 40,
						}}>
						&#9924;
					</span>
				</div>
			)}
		</div>
	);
};

export default Quastion;
