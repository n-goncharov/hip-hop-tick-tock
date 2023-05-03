import { FC } from "react";
import TimerModal from "../TimerModal";
import ITrack from "../../shared/interfaces/track"
import ITimer from "../../shared/interfaces/timer"

interface IAddTimerModalProps {
	title: string;

	isModalActive: boolean;
	setModalActive: React.Dispatch<React.SetStateAction<boolean>>;

	setTimerList: React.Dispatch<React.SetStateAction<ITimer[]>>;

	trackList: ITrack[];

	timerTitle: string;
	timerDate: string;
	trackId: string;

	setTimerTitle: React.Dispatch<React.SetStateAction<string>>;
	setTimerDate: React.Dispatch<React.SetStateAction<string>>;
	setTrackId: React.Dispatch<React.SetStateAction<string>>;
}

const AddTimerModal: FC<IAddTimerModalProps> = ({
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
	setTrackId
}) => {
	const handleAddTimer = () => {
		const openRequest = indexedDB.open("db", 1);

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transaction = db.transaction('timers', 'readwrite');
			const timers = transaction.objectStore('timers');

			const timer: ITimer = {
				id: timerTitle,
				title: timerTitle,
				trackId: trackId,
				date: timerDate,
			};

			const request = timers.add(timer, timer.id);

			request.onsuccess = () => {
				console.log(`Timer ${request.result} added to indexedDB`);
			};

			request.onerror = () => {
				console.log('Error: ', request.error);
			};

			setTimerList((timerList) => [...timerList, timer]);
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
};

export default AddTimerModal;
