import styles from './AddTrackButton.module.scss';
import Button from '../Button';

const AddTrackButton = ({ setTrackList }: any) => {
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

				const request = tracks.add(track, track.id);

				request.onsuccess = () => {
					console.log(`Track ${request.result} added to indexedDB`);
				};

				request.onerror = () => {
					console.log('Error: ', request.error);
				};

				setTrackList((trackList: any) => [...trackList, track]);
			};
		};

		reader.readAsDataURL(file);
		e.target.value = null;
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
					name='add.png'
				/>
			</label>
		</>
	);
};

export default AddTrackButton;
