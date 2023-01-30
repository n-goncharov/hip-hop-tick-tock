import Button from "../Button";

const RecordButton = ({ onClick }: any) => {
	return (
		<Button
			title='записать'
			name='record.png'
			onClick={onClick}
		/>
	);
};

export default RecordButton;
