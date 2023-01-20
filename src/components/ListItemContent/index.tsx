import styles from './ListItemContent.module.scss';

const ListItem = ({ id, title, handleEdit, handleRemove }: any) => {
	return (
		<div className={styles.listItemContent}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.buttons}>
				<input
					type="image"
					className={styles.button}
					width={18}
					height={18}
					src="/img/list-item-edit.svg"
					onClick={handleEdit}
					alt=""
				/>
				<input
					type="image"
					className={styles.button}
					src="/img/list-item-delete.svg"
					alt=""
					id={id}
					onClick={handleRemove}
				/>
			</div>
		</div>
	);
}

export default ListItem;
