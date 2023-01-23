import styles from './TrackItem.module.scss'
import ListItem from "../ListItemContent";
import { useEffect } from 'react';

const TrackItem = ({ id, title, src, setTrackList }: any) => {
	useEffect(() => {
		console.log('TrackItem');
	});

	const handleEditTrack = () => {

	};

	const handleRemoveTrack = (e: any) => {
		setTrackList((trackList: any[]) => {
			const openRequest = indexedDB.open("db", 1);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction("tracks", "readwrite");

				const tracks = transaction.objectStore("tracks");
				tracks.delete(e.target.id);
			}

			return trackList.filter((item) => item.id !== e.target.id)
		});
	};

	return (
		<>
			<li className={styles.trackItem}>
				<ListItem
					title={title}
					id={id}
					handleEdit={handleEditTrack}
					handleRemove={handleRemoveTrack}
				/>
				<audio
					className={styles.audio}
					src={src}
					controls
				/>
			</li>
		</>
	);
}

export default TrackItem;
