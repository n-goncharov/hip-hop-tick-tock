import styles from './Track.module.scss'
import ListItem from "../ListItem";

const TrackItem = ({ id, title, src, updateTrackList }: any) => {
	const handleRemoveTrack = (e: any) => {
		updateTrackList((trackList: any[]) => {
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
			<div className={styles.track}>
				<ListItem
					title={title}
					id={id}
					handleRemove={handleRemoveTrack}
				/>
				<audio className={styles.audio} src={src} controls ></audio>
			</div>
		</>
	);
}

export default TrackItem;
