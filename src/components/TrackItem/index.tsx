import styles from './TrackItem.module.scss';
import ListItemContent from "../ListItemContent";
import React, { FC, useState } from 'react';
import EditTrackInput from '../EditTrackInput';
import ITrack from "../../shared/interfaces/track";

interface ITrackItemProps {
	id: string;
	title: string | React.ReactNode;
	src?: string;
	setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>
}

const TrackItem: FC<ITrackItemProps> = ({
	id,
	title,
	src,
	setTrackList
}) => {
	const [isTrackEdit, setTrackEdit] = useState(true);

	const handleRemoveTrack = (e: React.MouseEvent<HTMLElement>) => {
		setTrackList((trackList: ITrack[]) => {
			const openRequest = indexedDB.open("db", 1);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction("tracks", "readwrite");

				const tracks = transaction.objectStore("tracks");
				tracks.delete((e.target as HTMLElement).id);
			}

			return trackList.filter((item) => item.id !== (e.target as HTMLElement).id);
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
