import TimerModal from "../TimerModal";
import ITrack from "../../shared/interfaces/track"
import ITimer from "../../shared/interfaces/timer"
import { FC } from "react";

interface IEditTimerModal {
	title: string;
	isModalActive: boolean;
	setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	setTimerList: React.Dispatch<React.SetStateAction<ITimer[]>>;
	trackList: ITrack[];
	timerTitle: string;
	timerDate: string;
	trackId: string;
	setTimerTitle: React.Dispatch<React.SetStateAction<string>>;
	setTimerDate: React.Dispatch<React.SetStateAction<string>>
	setTrackId: React.Dispatch<React.SetStateAction<string>>;
	editTimerId: string;
}

const EditTimerModal: FC<IEditTimerModal> = ({
	title,
	isModalActive,
	setModalActive,
	setTimerList,
	trackList,
	timerTitle,
	timerDate,
	trackId,
	setTimerTitle,
	setTimerDate,
	setTrackId,
	editTimerId
}) => {
	const handleEditTimer = () => {
		const openRequest = indexedDB.open("db", 1);

		const timer: ITimer = {
			id: editTimerId,
			title: timerTitle,
			trackId: trackId,
			date: timerDate,
		};

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transaction = db.transaction('timers', 'readwrite');
			const timers = transaction.objectStore('timers');

			const request = timers.put(timer, timer.id);

			request.onsuccess = () => {
				console.log(`Timer ${request.result} changed`);
			};

			request.onerror = () => {
				console.log('Error: ', request.error);
			};
		};

		setTimerList((timerList: ITimer[]) => {
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
