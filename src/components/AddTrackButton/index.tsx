const AddTrackButton = ({ handleAddTrack }: any) => {
	return (
		//{/* <Button title='добавить' name='add.png' /> */ }
		<input type="file" onChange={handleAddTrack} />
	);
}

export default AddTrackButton;
