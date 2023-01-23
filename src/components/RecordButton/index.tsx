import { useEffect } from "react";
import Button from "../Button";

const RecordButton = ({ setModalOpen }: any) => {
	useEffect(() => {
		console.log('RecordButton');
	});

	return (
		<Button
			title='записать'
			name='record.png'
			setModalOpen={setModalOpen}
		/>
	);
}

export default RecordButton;
