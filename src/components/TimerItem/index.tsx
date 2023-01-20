import styles from './TimerItem.module.scss'
import ListItem from "../ListItemContent";

const TimerItem = ({ id, title, setTimerList }: any) => {
	const handleEditTimer = () => {

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
