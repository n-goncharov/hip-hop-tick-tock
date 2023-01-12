import styles from './ListItem.module.scss';

const ListItem = (props: any) => {
	return (
		<li className={styles['list-item']}>
			<h3 className={styles['list-item__title']}>{props.title}</h3>
			<div className={styles['buttons-container']}>
				<input
					type="image"
					className={styles['list-item__edit-button']}
					width={18}
					height={18}
					src="/img/list-item-edit.svg"
					alt=""
				/>
				<input
					type="image"
					className={styles['list-item__delete-button']}
					src="/img/list-item-delete.svg"
					alt=""
					id={props.id}
					onClick={props.handleRemove}
				/>
			</div>
		</li>
	);
}

export default ListItem;
