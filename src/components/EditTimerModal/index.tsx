import { useEffect } from "react";
import TimerModal from "../TimerModal";

const EditTimerModal = ({ title, isModalActive, setModalActive, setTimerList, trackList, timerTitle, timerDate, trackId, setTimerTitle, setTimerDate, setTrackId, editTimerId }: any) => {
	useEffect(() => {
		// console.log('EditTimerModal');
	});

	const handleEditTimer = () => {
		const openRequest = indexedDB.open("db", 1);

		const timer = {
			id: editTimerId,
			title: timerTitle,
			track_id: trackId,
			date: timerDate,
		};

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transaction = db.transaction('timers', 'readwrite');
			const timers = transaction.objectStore('timers');

			const request = timers.put(timer, timer.id);

			request.onsuccess = () => {
				console.log('Timer изменён', request.result);
			};

			request.onerror = () => {
				console.log('Ошибка', request.error);
			};
		};

		setTimerList((timerList: any) => {
			const timerListCopy = [...timerList];
			const index = timerListCopy.findIndex((item) => item.id === editTimerId);
			timerListCopy[index] = timer;
			return timerListCopy;
		});

		setModalActive(false);
	};

	return (
		<TimerModal
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

			handleTimer={handleEditTimer}
		/>
	);
};

export default EditTimerModal;
