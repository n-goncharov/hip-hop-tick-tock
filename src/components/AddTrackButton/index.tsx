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

				const request = tracks.add(track);

				request.onsuccess = () => {
					console.log('Track добавлен в хранилище', request.result);
				};

				request.onerror = () => {
					console.log('Ошибка', request.error);
				};

				setTrackList((trackList: any) => [...trackList, track]);
			};
		};

		reader.readAsDataURL(file);
		e.target.value = null;
	}

	return (
		<input
			type="file"
			accept="audio/*"
			onChange={handleAddTrack}
		/>
	);
}

export default AddTrackButton;
