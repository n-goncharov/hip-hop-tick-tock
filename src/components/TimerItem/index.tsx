import ListItem from "../ListItem";

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
		<ListItem
			id={id}
			title={title}
			handleEdit={handleEditTimer}
			handleRemove={handleRemoveTimer}
		/>
	);
}

export default TimerItem;
