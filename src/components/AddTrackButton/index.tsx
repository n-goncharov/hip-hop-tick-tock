import Button from "../Button";

const AddTrackButton = () => {
	const handlerClick = () => {
		console.log('нажал добавить трек');
	}

	return (
		<Button title='добавить' onClick={handlerClick} />
	);
}

export default AddTrackButton;
