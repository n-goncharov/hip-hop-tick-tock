const AddTrackButton = ({ handleAddTrack }: any) => {
	return (
		//{/* <Button title='добавить' name='add.png' /> */ }
		<input type="file" accept="audio/*" onChange={handleAddTrack} />
	);
}

export default AddTrackButton;
