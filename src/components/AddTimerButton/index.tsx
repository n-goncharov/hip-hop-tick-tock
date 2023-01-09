import Button from "../Button";
//import Button from "../../../node_modules/@mui/material/Button";

const AddTimerButton = () => {
	const handlerClick = () => {
		console.log('нажал добавить таймер');
	}

	return (
		<Button title='добавить' onClick={handlerClick} />
	);
}

export default AddTimerButton;
