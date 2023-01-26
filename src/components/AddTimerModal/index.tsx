import TimerModal from "../TimerModal";
import { memo, useEffect, useState } from 'react';

const AddTimerModal = memo(({ title, isModalActive, setModalActive, setTimerList, trackList, timerTitle, timerDate, trackId, setTimerTitle, setTimerDate, setTrackId }: any) => {
	useEffect(() => {
		// console.log('AddTimerModal');
	});

	const handleAddTimer = () => {
		const openRequest = indexedDB.open("db", 1);

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transaction = db.transaction('timers', 'readwrite');
			const timers = transaction.objectStore('timers');

			const timer = {
				id: timerTitle,
				title: timerTitle,
				track_id: trackId,
				date: timerDate,
			};

			const request = timers.add(timer, timer.id);

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

	return <TimerModal
		title={title}

		isModalActive={isModalActive}
		setModalActive={setModalActive}

		trackList={trackList}

		timerTitle={timerTitle}
		timerDate={timerDate}
		trackId={trackId}

		setTimerTitle={setTimerTitle}
		setTimerDate={setTimerDate}
		setTrackId={setTrackId}

		handleTimer={handleAddTimer}
	/>;
});

export default AddTimerModal;
