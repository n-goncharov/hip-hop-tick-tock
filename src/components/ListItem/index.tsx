import styles from './ListItem.module.scss';

const ListItem = ({ title, id, handleEdit, handleRemove }: any) => {
	return (
		<li className={styles.listItem}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.buttonsContainer}>
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
		</li>
	);
}

export default ListItem;
