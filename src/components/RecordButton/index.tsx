import Button from "../Button";

const RecordButton = ({isModalOpen, showModal}: any) => {

	return (
		<Button title='записать' name='record.png' isModalOpen={isModalOpen} showModal={showModal} />
	);
}

export default RecordButton;
