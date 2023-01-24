import styles from './TimerItem.module.scss'
import ListItemContent from "../ListItemContent";
import { useEffect } from 'react';

const TimerItem = ({ id, title, trackId, date, setTimerList, setModalActive, setTimerTitle, setTimerDate, setTrackId, setEditTimerId }: any) => {
	useEffect(() => {
		// console.log('TimerItem');
	});

	const handleEditTimer = () => {
		setEditTimerId(id);

		setTimerTitle(title);
		setTimerDate(date);
		setTrackId(trackId);

		setModalActive(true);
	};

	const handleRemoveTimer = (e: any) => {
		setTimerList((timerList: any[]) => {
			const openRequest = indexedDB.open("db", 1);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction("timers", "readwrite");

				const timers = transaction.objectStore("timers");
				timers.delete(e.target.id);
			}

			return timerList.filter((item) => item.id !== e.target.id)
		});
	};

	return (
		<li className={styles.timerItem}>
			<ListItemContent
				id={id}
				title={title}
				handleEdit={handleEditTimer}
				handleRemove={handleRemoveTimer}
			/>
		</li>
	);
}

export default TimerItem;
