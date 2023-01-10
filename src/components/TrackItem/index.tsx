import ListItem from "../ListItem";

const TrackItem = (props: any) => {
	return (
		<ListItem title={props.title} id={props.id} handleRemove={props.handleRemove} />
	);
}

export default TrackItem;
