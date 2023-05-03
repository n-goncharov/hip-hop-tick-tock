import styles from './AddTrackButton.module.scss';
import Button from '../Button';
import ITrack from "../../shared/interfaces/track";
import React, { FC } from 'react';

interface IAddTrackButtonProps {
	setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>
}

const AddTrackButton: FC<IAddTrackButtonProps> = ({
	setTrackList
}) => {
	const handleAddTrack = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];

			const reader = new FileReader();

			reader.onload = () => {
				const src = reader.result;

				const openRequest = indexedDB.open("db", 1);

				openRequest.onsuccess = () => {
					const db = openRequest.result;
					const transaction = db.transaction('tracks', 'readwrite');
					const tracks = transaction.objectStore('tracks');

					const track: ITrack = {
						id: file.name,
						title: file.name,
						src: src as string
					};

					const request = tracks.add(track, track.id);

					request.onsuccess = () => {
						console.log(`Track ${request.result} added to indexedDB`);
					};

					request.onerror = () => {
						console.log('Error: ', request.error);
					};

					setTrackList((trackList: ITrack[]) => [...trackList, track]);
				};
			};

			reader.readAsDataURL(file);
			e.target.value = '';
		}
	}

	return (
		<>
			<label
				htmlFor="upload-track"
				className={styles.button}
			>
				<input
					id='upload-track'
					type="file"
					accept="audio/*"
					onChange={handleAddTrack}
				/>

				<Button
					title='добавить'
				/>
			</label>
		</>
	);
};

export default AddTrackButton;
