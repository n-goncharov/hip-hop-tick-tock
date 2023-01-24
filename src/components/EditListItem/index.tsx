import { useEffect, useState } from 'react';
import styles from './EditListItem.module.scss'

const EditListItem = ({ id, title, src, handleEdit, handleRemove, setTrackList, setTrackEdit }: any) => {
	useEffect(() => {
		// console.log('EditListItem');
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
				trackListCopy[index].title = titleInput;
				return trackListCopy;
			});

			setTrackEdit((isTrackEdit: any) => !isTrackEdit);
		}
	};

	return (
		<div className={styles.listItemContent}>
			<input
				className={styles.title}
				value={titleInput}
				onChange={(e: any) => setTitleInput(e.target.value)}
				onKeyDown={onKeyDown}
			/>

			<div className={styles.buttons}>
				<input
					type="image"
					className={styles.button}
					width={18}
					height={18}
					src="/img/list-item-edit.svg"
					id={id}
					onClick={handleEdit}
					alt=""
				/>

				<input
					type="image"
					className={styles.button}
					src="/img/list-item-delete.svg"
					alt=""
					id={id}
					onClick={handleRemove}
				/>
			</div>
		</div>
	);
};

export default EditListItem;
