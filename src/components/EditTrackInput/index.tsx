import { useEffect, useState } from 'react';
import styles from './EditTrackInput.module.scss';

const EditTrackInput = ({ id, title, src, setTrackList, setTrackEdit }: any) => {
	useEffect(() => {
		// console.log('EditTrackInput');
	});

	const [titleInput, setTitleInput] = useState(title);

	const onKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			const openRequest = indexedDB.open("db", 1);

			const track = {
				id,
				title: titleInput,
				src
			};

			console.log(id);

			openRequest.onsuccess = () => {
				const db = openRequest.result;
				const transaction = db.transaction('tracks', 'readwrite');
				const tracks = transaction.objectStore('tracks');

				const request = tracks.put(track, id);

				request.onsuccess = () => {
					console.log('Track изменён', request.result);
				};

				request.onerror = () => {
					console.log('Ошибка', request.error);
				};
			};

			setTrackList((trackList: any) => {
				const trackListCopy = [...trackList];
				const index = trackListCopy.findIndex((item) => item.id === id);
				trackListCopy[index] = track;
				return trackListCopy;
			});

			setTrackEdit((isTrackEdit: any) => !isTrackEdit);
		}
	};

	return (
		<input
			className={styles.input}
			value={titleInput}
			onChange={(e: any) => setTitleInput(e.target.value)}
			onKeyDown={onKeyDown}
		/>
	);
};

export default EditTrackInput;
