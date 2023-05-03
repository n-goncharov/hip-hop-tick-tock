import { FC } from "react";
import Button from "../Button";

interface IAddTimerButtonProps {
	onClick: () => void;
}

const AddTimerButton: FC<IAddTimerButtonProps> = ({
	onClick
}) => {
	return (
		<Button
			title='добавить'
			onClick={onClick}
		/>
	);
};

export default AddTimerButton;
