import { useEffect } from "react";
import Button from "../Button";

const RecordButton = ({ setModalActive }: any) => {
	useEffect(() => {
		//console.log('RecordButton');
	});

	return (
		<Button
			title='записать'
			name='record.png'
			setModalActive={setModalActive}
		/>
	);
}

export default RecordButton;
