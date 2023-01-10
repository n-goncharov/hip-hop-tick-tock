import { isPropertySignature } from "typescript";

const ListItem = (props: any) => {

	return (
		<li>
			<div className="">
				{props.title}
				<input width={18} height={18} type="image" src="/img/edit-button.png" />
				<input type="image" src="/img/delete-list-item-button.svg" id={props.id} onClick={props.handleRemove} />
			</div>
		</li>
	);
}

export default ListItem;
