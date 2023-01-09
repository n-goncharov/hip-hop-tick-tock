import Button from "../Button";

const RecordButton = () => {
	const handlerClick = () => {
		console.log('нажал записать');
	}

	return (
		<Button title='записать' onClick={handlerClick} />
	);
}

export default RecordButton;
