import styles from './TrackItem.module.scss';
import ListItemContent from "../ListItemContent";
import { useState } from 'react';
import EditTrackInput from '../EditTrackInput';

const TrackItem = ({ id, title, src, setTrackList }: any) => {
	const [isTrackEdit, setTrackEdit] = useState(true);

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

	const listItemContent = () => {
		if (isTrackEdit) {
			return (
				<ListItemContent
					title={title}
					id={id}
					handleEdit={() => setTrackEdit((isTrackEdit) => !isTrackEdit)}
					handleRemove={handleRemoveTrack}
				/>
			);
		}

		return (
			<ListItemContent
				title={
					<EditTrackInput
						id={id}
						title={title}
						src={src}

						setTrackList={setTrackList}
						setTrackEdit={setTrackEdit}
					/>
				}
				id={id}
				handleEdit={() => setTrackEdit((isTrackEdit) => !isTrackEdit)}
				handleRemove={handleRemoveTrack}
			/>
		);
	};

	return (
		<>
			<li className={styles.trackItem}>
				{listItemContent()}

				<audio
					className={styles.audio}
					src={src}
					controls
				/>
			</li>
		</>
	);
};

export default TrackItem;
