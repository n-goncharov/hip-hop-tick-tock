import Button from "../Button";

const RecordButton = ({ showModal }: any) => {

	return (
		<Button
			title='записать'
			name='record.png'
			showModal={showModal}
		/>
	);
}

export default RecordButton;
