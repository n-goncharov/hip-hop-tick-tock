import styles from './AddTimerModal.module.scss';
import Modal from "../Modal";
import { memo, useEffect, useState } from 'react';

const AddTimerModal = memo(({ title, isModalActive, setModalActive, setTimerList, trackList, timerName, timerDate, trackId, setTimerName, setTimerDate, setTrackId }: any) => {
	useEffect(() => {
		console.log('AddTimerModal');
	});

	const handleAddTimer = () => {
		const openRequest = indexedDB.open("db", 1);

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transaction = db.transaction('timers', 'readwrite');
			const timers = transaction.objectStore('timers');

			const timer = {
				id: timerName,
				title: timerName,
				track_id: trackId
			};

			const request = timers.add(timer);

			request.onsuccess = () => {
				console.log('Timer добавлен в хранилище', request.result);
			};

			request.onerror = () => {
				console.log('Ошибка', request.error);
			};

			setTimerList((timerList: any) => [...timerList, timer]);
		};

		setModalActive(false);
	};

	return (
		<Modal
			title={title}
			isModalActive={isModalActive}
			setModalActive={setModalActive}
			className={styles.modal}
		>
			<div className={styles.addTimerModal}>
				<div className={styles.content}>
					<input
						id='timerName'
						value={timerName}
						type="text"
						placeholder="Введите название таймера"
						onChange={(e) => setTimerName(e.target.value)}
					/>
					<input
						id='timerDate'
						value={timerDate}
						className={styles.date}
						type="datetime-local"
						onChange={(e) => setTimerDate(e.target.value)}
					/>
					{trackList.map((track: any) => (
						<label key={track.id}>
							<input
								type="radio"
								value={track.id}
								checked={trackId === track.id}
								onChange={(e) => setTrackId(e.target.value)}
							/>
							{track.id}
						</label>
					))}
				</div>

				<div className={styles.buttons}>
					<input
						type="image"
						width={49}
						height={49}
						src='/img/accept-modal.png'
						onClick={handleAddTimer}
					/>

					<input
						type="image"
						width={49}
						height={49}
						src='/img/close-modal.png'
						onClick={() => setModalActive(false)}
					/>
				</div>
			</div>
		</Modal>
	);
});

export default AddTimerModal;
