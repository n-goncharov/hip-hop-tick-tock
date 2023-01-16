import ListItem from "../ListItem";

const TrackItem = ({ title, id, handleRemove }: any) => {
	return (
		<ListItem
			title={title}
			id={id}
			handleRemove={handleRemove}
		/>
	);
}

export default TrackItem;
