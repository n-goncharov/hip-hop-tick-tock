import React, { FC, useState } from 'react';
import styles from './EditTrackInput.module.scss';
import ITrack from "../../shared/interfaces/track"

interface IEditTrackInputProps {
	id: string;
	title: string | React.ReactNode;
	src?: string;
	setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
	setTrackEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTrackInput: FC<IEditTrackInputProps> = ({
	id,
	title,
	src,
	setTrackList,
	setTrackEdit
}) => {
	const [titleInput, setTitleInput] = useState(title);

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.code === 'Enter') {
			const openRequest = indexedDB.open("db", 1);

			const track: ITrack = {
				id,
				title: titleInput as string,
				src
			};

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction('tracks', 'readwrite');
				const tracks = transaction.objectStore('tracks');

				const request = tracks.put(track, id);

				request.onsuccess = () => {
					console.log(`Track ${request.result} changed`);
				};

				request.onerror = () => {
					console.log('Error: ', request.error);
				};
			};

			setTrackList((trackList: ITrack[]) => {
				const trackListCopy = [...trackList];
				const index = trackListCopy.findIndex((item) => item.id === id);
				trackListCopy[index] = track;
				return trackListCopy;
			});

			setTrackEdit((isTrackEdit) => !isTrackEdit);
		}
	};

	return (
		<input
			className={styles.input}
			value={titleInput as string}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleInput(e.target.value)}
			onKeyDown={onKeyDown}
		/>
	);
};

export default EditTrackInput;
