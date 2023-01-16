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

const timers: { id: string, title: string, src: string }[] = [
	{ id: '1', title: 'Утро', src: 'ссылка на аудио' },
	{ id: '2', title: 'Похавать', src: 'ссылка на аудио' },
	{ id: '3', title: 'Иди в военкомат', src: 'ссылка на аудио' },
];

const Menu = ({ isMenuActive, showTrackModal, showTimerModal }: any) => {
	const [trackList, updateTrackList] = useState<{ id: string, title: string, src: string | ArrayBuffer | null }[]>([]);
	const [timerList, updateTimerList] = useState(timers);

	useEffect(() => {
		let openRequest = indexedDB.open("db", 1);

		openRequest.onupgradeneeded = () => {
			let db = openRequest.result;
			if (!db.objectStoreNames.contains('tracks')) {
				db.createObjectStore('tracks', { keyPath: 'id', autoIncrement: true });
			}
		};

		openRequest.onsuccess = () => {
			const db = openRequest.result;
			const transaction = db.transaction("tracks", "readwrite");

			const tracks = transaction.objectStore("tracks");
			const request = tracks.getAll();
			request.onsuccess = () => {
				updateTrackList(request.result);
			}
		}
	}, []);

	const handleRemoveTrack = (e: any) => {
		updateTrackList((trackList) => {
			let openRequest = indexedDB.open("db", 1);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction("tracks", "readwrite");

				const tracks = transaction.objectStore("tracks");
				tracks.delete(e.target.id);
			}

			return trackList.filter((item) => item.id !== e.target.id)
		});
	};

	const handleRemoveTimer = (e: any) => {
		updateTimerList((timerList) => timerList.filter((item) => item.id !== e.target.id));
	};

	const handleAddTrack = (e: any) => {
		const file = e.target.files[0];

		const reader = new FileReader();
		reader.onload = () => {
			const src = reader.result;

			const openRequest = indexedDB.open("db", 1);
			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction('tracks', 'readwrite');
				const tracks = transaction.objectStore('tracks');

				const track: { id: string, title: string, src: string | ArrayBuffer | null } = {
					id: file.name,
					title: file.name,
					src: src
				};

				const request = tracks.add(track);

				request.onsuccess = () => {
					console.log('Track добавлен в хранилище', request.result);
				};

				request.onerror = () => {
					console.log('Ошибка', request.error);
				};

				updateTrackList([...trackList, track]);
			};
		}
		reader.readAsDataURL(file);

		e.target.value = null;
	};

	return (
		<aside className={cn(styles.menu, { [styles.menuActive]: isMenuActive })}>

			<ChangeTheme />

			<ListBox
				title='Мои таймеры'
				buttons={<AddTimerButton showModal={showTimerModal} />}
			>
				{timerList.map(timer => (
					<TimerItem
						key={timer.id}
						id={timer.id}
						title={timer.title}
						handleRemove={handleRemoveTimer}
					/>
				))}
			</ListBox>

			<ListBox
				title='Библиотека треков'
				buttons={
					[
						<AddTrackButton
							key='add-track-button'
							handleAddTrack={handleAddTrack}
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
						handleRemove={handleRemoveTrack}
					/>
				))}
			</ListBox>
		</aside>
	);
}

export default Menu;
