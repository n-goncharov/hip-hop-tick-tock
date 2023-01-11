import Button from "../Button";

const AddTimerButton = () => {
	const handlerClick = () => {
		console.log('нажал добавить таймер');
	}

	return (
		<Button title='добавить' name='add.png' onClick={handlerClick} />
	);
}

export default AddTimerButton;
