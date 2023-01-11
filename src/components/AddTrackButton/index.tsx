import Button from "../Button";

const AddTrackButton = () => {
	const handlerClick = () => {
		console.log('нажал добавить трек');
	}

	return (
		<Button title='добавить' name='add.png' onClick={handlerClick} />
	);
}

export default AddTrackButton;
