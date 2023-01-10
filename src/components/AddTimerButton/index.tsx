import Button from "../Button";

const AddTimerButton = () => {
	const handlerClick = () => {
		console.log('нажал добавить таймер');
	}

	return (
		<Button title='добавить' onClick={handlerClick} />
	);
}

export default AddTimerButton;
