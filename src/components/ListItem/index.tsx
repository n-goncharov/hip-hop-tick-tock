import styles from './ListItem.module.scss'

const ListItem = (props: any) => {
	return (
		<li className={styles['list-item']}>
				<h3 className={styles['list-item__title']}>{props.title}</h3>
				<div className={styles['btns-container']}>
					<input width={18} height={18} type="image" src="/img/edit-button.png" />
					<input type="image" src="/img/delete-list-item-button.svg" id={props.id} onClick={props.handleRemove} />
				</div>
		</li>
	);
}

export default ListItem;
