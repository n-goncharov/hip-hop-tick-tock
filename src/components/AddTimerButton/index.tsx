import Button from "../Button";

const AddTimerButton = ({ onClick }: any) => {
	return (
		<Button
			title='добавить'
			name='add.png'
			onClick={onClick}
		/>
	);
};

export default AddTimerButton;
