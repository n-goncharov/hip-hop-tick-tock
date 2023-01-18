import styles from './Menu.module.scss';
import cn from "classnames";
import ChangeTheme from '../ChangeTheme';
import ListBox from '../ListBox';
import AddTrackButton from '../AddTrackButton';
import RecordButton from '../RecordButton';
import TrackItem from '../TrackItem';
import TimerItem from '../TimerItem';
import AddTimerButton from '../AddTimerButton';
import { useEffect, useState } from 'react';

const Menu = ({ isMenuActive, showTrackModal, showTimerModal, timerList, setTimerList }: any) => {
	const [trackList, setTrackList] = useState<{ id: string, title: string, src: string | ArrayBuffer | null }[]>([]);

	useEffect(() => {
		const openRequest = indexedDB.open("db", 1);

		openRequest.onupgradeneeded = () => {
			const db = openRequest.result;

			if (!db.objectStoreNames.contains('tracks')) {
				db.createObjectStore('tracks', { keyPath: 'id' });
			}

			if (!db.objectStoreNames.contains('timers')) {
				db.createObjectStore('timers', { keyPath: 'id' });
			}
		};

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transactionTrack = db.transaction("tracks", "readwrite");
			const transactionTimer = db.transaction("timers", "readwrite");

			const tracks = transactionTrack.objectStore("tracks");
			const requestTracks = tracks.getAll();
			requestTracks.onsuccess = () => {
				setTrackList(requestTracks.result);
			}

			const timers = transactionTimer.objectStore("timers");
			const requestTimers = timers.getAll();
			requestTimers.onsuccess = () => {
				setTimerList(requestTimers.result);
			}
		}
	}, []);

	return (
		<aside className={cn(styles.menu, { [styles.menuActive]: isMenuActive })}>

			<ChangeTheme />

			<ListBox
				title='Мои таймеры'
				buttons={
					<AddTimerButton showModal={showTimerModal} />
				}
			>
				{timerList.map((timer: { id: string, title: string, track_id: string }) => (
					<TimerItem
						key={timer.id}
						id={timer.id}
						title={timer.title}
						setTimerList={setTimerList}
						showModal={showTimerModal}
					/>
				))}
			</ListBox>

			<ListBox
				title='Библиотека треков'
				buttons={
					[
						<AddTrackButton
							key='add-track-button'
							setTrackList={setTrackList}
						/>,
						<RecordButton
							key='record-button'
							showModal={showTrackModal}
						/>
					]
				}
			>
				{trackList.map((track) => (
					<TrackItem
						key={track.id}
						id={track.id}
						title={track.title}
						src={track.src}
						setTrackList={setTrackList}
					/>
				))}
			</ListBox>
		</aside>
	);
}

export default Menu;
