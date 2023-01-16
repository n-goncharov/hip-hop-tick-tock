import ListItem from "../ListItem";

const TimerItem = ({ title, id, handleRemove }: any) => {
	return (
		<ListItem
			title={title}
			id={id}
			handleRemove={handleRemove}
		/>
	);
}

export default TimerItem;
