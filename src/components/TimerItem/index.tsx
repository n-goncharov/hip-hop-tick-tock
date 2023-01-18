import ListItem from "../ListItem";

const TimerItem = ({ id, title, updateTimerList, showModal }: any) => {
	const handleEditTimer = () => {
		//showModal();
	}

	const handleRemoveTimer = (e: any) => {
		updateTimerList((timerList: any[]) => {
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
			title={title}
			id={id}
			handleEdit={handleEditTimer}
			handleRemove={handleRemoveTimer}
		/>
	);
}

export default TimerItem;
