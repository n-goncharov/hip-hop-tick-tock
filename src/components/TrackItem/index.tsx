import styles from './TrackItem.module.scss'
import ListItemContent from "../ListItemContent";
import { useEffect, useState } from 'react';
import EditListItem from '../EditListItem';

const TrackItem = ({ id, title, src, setTrackList }: any) => {
	useEffect(() => {
		//console.log('TrackItem');
	});

	const [isTrackEdit, setTrackEdit] = useState(true);

	const handleEdit = (e: any) => {
		setTrackEdit((isTrackEdit) => !isTrackEdit);
	}

	const handleRemoveTrack = (e: any) => {
		setTrackList((trackList: any[]) => {
			const openRequest = indexedDB.open("db", 1);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction("tracks", "readwrite");

				const tracks = transaction.objectStore("tracks");
				tracks.delete(e.target.id);
			}

			return trackList.filter((item) => item.id !== e.target.id);
		});
	};

	return (
		<>
			<li className={styles.trackItem}>
				{isTrackEdit ? <ListItemContent
					title={title}
					id={id}
					handleEdit={() => setTrackEdit((isTrackEdit) => !isTrackEdit)}
					handleRemove={handleRemoveTrack}
				/> : <EditListItem
					id={id}
					title={title}
					src={src}
					handleEdit={handleEdit}
					handleRemove={handleRemoveTrack}
					setTrackList={setTrackList}
					setTrackEdit={setTrackEdit}
				/>
				}

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
