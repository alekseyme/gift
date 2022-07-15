import React from 'react';

const CancelItem = ({ name, task }) => {
	const [open, setOpen] = React.useState(false);

	return (
		<div style={{ display: 'flex', maxWidth: 1300, margin: '0 auto' }}>
			<div
				className={'surprise-box'}
				onClick={() => setOpen(true)}
				style={{
					flex: '0 0 400px',
					height: 140,
					marginBottom: 40,
					marginRight: 40,
					cursor: 'pointer',
				}}>
				🎁 {name}
			</div>
			{open && (
				<>
					<div
						style={{
							flex: '1 1 300px',
							height: 140,
							marginBottom: 40,
							marginRight: 40,
							padding: 16,
							border: '1px solid #d6d6e7',
							borderRadius: 10,
							boxShadow: 'inset 0 1px 4px 0 rgb(119 122 175 / 30%)',
						}}>
						<b>Вопрос:</b> {task.question}
						<br />
						<b>Ответ:</b> <span className="invis-answer">{task.answer}</span>
					</div>
					<div
						style={{
							flex: '1 1 300px',
							height: 140,
							marginBottom: 40,
							padding: 16,
							border: '1px solid #d6d6e7',
							borderRadius: 10,
							boxShadow: 'inset 0 1px 4px 0 rgb(119 122 175 / 30%)',
						}}>
						<b>Сюрприз:</b> {task.successItem}
					</div>
				</>
			)}
		</div>
	);
};

export default CancelItem;
