import { useEffect } from "react";
import Button from "../Button";

const AddTimerButton = ({ setModalOpen }: any) => {
	useEffect(() => {
		console.log('AddTimerButton');
	});

	return (
		<Button
			title='добавить'
			name='add.png'
			setModalOpen={setModalOpen}
		/>
	);
}

export default AddTimerButton;
