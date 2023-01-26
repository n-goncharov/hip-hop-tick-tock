import { useEffect } from "react";
import Button from "../Button";

const RecordButton = ({ onClick }: any) => {
	useEffect(() => {
		//console.log('RecordButton');
	});

	return (
		<Button
			title='записать'
			name='record.png'
			onClick={onClick}
		/>
	);
}

export default RecordButton;
