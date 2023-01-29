import styles from './TimerItem.module.scss'
import ListItemContent from "../ListItemContent";
import { useEffect } from 'react';

const TimerItem = ({ id, title, trackId, date, setTimerList, setModalActive, setTimerTitle, setTimerDate, setTrackId, setEditTimerId, setTimerActive, audio }: any) => {
	useEffect(() => {
		// console.log('TimerItem');
	});

	useEffect(() => {
		let timerTimeoutId: any;

		const openRequest = indexedDB.open("db", 1);

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transactionTrack = db.transaction("tracks", "readwrite");

			const tracks = transactionTrack.objectStore("tracks");
			const requestTracks = tracks.getAll();

			requestTracks.onsuccess = () => {
				const timerDate = new Date(date);
				const ms = +timerDate - Date.now();

				const track = requestTracks.result.find((track: any) => track.id === trackId);
				const src = track.src;

				if (ms >= 0) {
					timerTimeoutId = setTimeout(() => {
						audio.current = new Audio(src);
						audio.current.play();
						setTimerActive(true);
					}, ms);
				}
			};
		};

		return () => clearInterval(timerTimeoutId);
	}, []);

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
				title={<h3>{title}</h3>}
				handleEdit={handleEditTimer}
				handleRemove={handleRemoveTimer}
			/>
		</li>
	);
}

export default TimerItem;
