import styles from './TimerItem.module.scss'
import ListItem from "../ListItemContent";
import { useEffect } from 'react';

const TimerItem = ({ id, title, setTimerList, setModalActive, setTimerName, setTimerDate, setTrackId }: any) => {
	useEffect(() => {
		console.log('TimerItem');
	});

	const handleEditTimer = (e: any) => {
		//Поиск в базе таймеров по ключу e.target.id
		// setTimerName();
		// setTimerDate();
		// setTrackId();
		//setModalActive(true);
	}

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
			<ListItem
				id={id}
				title={title}
				handleEdit={handleEditTimer}
				handleRemove={handleRemoveTimer}
			/>
		</li>
	);
}

export default TimerItem;
