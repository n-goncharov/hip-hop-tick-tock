import { useEffect } from "react";
import Button from "../Button";

const AddTimerButton = ({ onClick }: any) => {
	useEffect(() => {
		// console.log('AddTimerButton');
	});

	return (
		<Button
			title='добавить'
			name='add.png'
			onClick={onClick}
		/>
	);
}

export default AddTimerButton;
