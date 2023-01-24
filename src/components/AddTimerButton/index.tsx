import { useEffect } from "react";
import Button from "../Button";

const AddTimerButton = ({ setModalActive }: any) => {
	useEffect(() => {
		// console.log('AddTimerButton');
	});

	return (
		<Button
			title='добавить'
			name='add.png'
			setModalActive={setModalActive}
		/>
	);
}

export default AddTimerButton;
