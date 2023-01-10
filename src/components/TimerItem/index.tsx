import ListItem from "../ListItem";

const TimerItem = (props: any) => {
	return (
		<ListItem title={props.title} id={props.id} handleRemove={props.handleRemove} />
	);
}

export default TimerItem;
