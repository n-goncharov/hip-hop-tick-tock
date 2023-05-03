import styles from './TimerItem.module.scss'
import ListItemContent from "../ListItemContent";
import React, { FC, MutableRefObject, RefObject, useEffect } from 'react';

import ITrack from '../../shared/interfaces/track';
import ITimer from "../../shared/interfaces/timer";

interface ITimerItemProps {
	id: string;
	title: string;
	trackId: string;
	date: string;
	setTimerList: React.Dispatch<React.SetStateAction<ITimer[]>>;
	setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	setTimerTitle: React.Dispatch<React.SetStateAction<string>>;
	setTimerDate: React.Dispatch<React.SetStateAction<string>>;
	setTrackId: React.Dispatch<React.SetStateAction<string>>;
	setEditTimerId: React.Dispatch<React.SetStateAction<string>>;
	setTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
	audioRef: MutableRefObject<HTMLAudioElement | undefined>;
	timerIdRef: MutableRefObject<string>;
	timerDateRef: MutableRefObject<string>;
}

const TimerItem: FC<ITimerItemProps> = ({
	id,
	title,
	trackId,
	date,
	setTimerList,
	setModalActive,
	setTimerTitle,
	setTimerDate,
	setTrackId,
	setEditTimerId,
	setTimerActive,
	audioRef,
	timerIdRef,
	timerDateRef
}) => {
	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const openRequest = indexedDB.open("db", 1);

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transactionTrack = db.transaction("tracks", "readwrite");

			const tracks = transactionTrack.objectStore("tracks");
			const requestTracks = tracks.getAll();

			requestTracks.onsuccess = () => {
				const timerDate = new Date(date);
				const ms = +timerDate - Date.now();

				const track = requestTracks.result.find((track: ITrack) => track.id === trackId);
				const src = track.src;

				if (ms >= 0) {
					timeoutId = setTimeout(() => {
						audioRef.current?.pause();
						audioRef.current = new Audio(src);
						audioRef.current.play();
						audioRef.current.onended = () => setTimerActive(false);

						setTimerList((timerList: ITimer[]) => {
							const openRequest = indexedDB.open("db", 1);

							openRequest.onsuccess = () => {
								const db = openRequest.result;
								const transaction = db.transaction("timers", "readwrite");

								const timers = transaction.objectStore("timers");
								timers.delete(id);
							}

							return timerList.filter((item) => item.id !== id)
						});

						timerIdRef.current = id;
						timerDateRef.current = date;

						setTimerActive(true);
					}, ms);
				}
			};
		};

		return () => clearTimeout(timeoutId);
	}, [title, trackId, date]);

	const handleEditTimer = () => {
		setEditTimerId(id);

		setTimerTitle(title);
		setTimerDate(date);
		setTrackId(trackId);

		setModalActive(true);
	};

	const handleRemoveTimer = (e: React.MouseEvent<HTMLElement>) => {
		setTimerList((timerList: ITimer[]) => {
			const openRequest = indexedDB.open("db", 1);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction("timers", "readwrite");

				const timers = transaction.objectStore("timers");
				timers.delete((e.target as HTMLElement).id);
			}

			return timerList.filter((item) => item.id !== (e.target as HTMLElement).id)
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
};

export default TimerItem;
