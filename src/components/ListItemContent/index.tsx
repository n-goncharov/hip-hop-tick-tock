import { useEffect } from 'react';
import styles from './ListItemContent.module.scss';

const ListItemContent = ({ id, title, handleEdit, handleRemove }: any) => {
	useEffect(() => {
		// console.log('ListItemContent');
	});

	return (
		<div className={styles.listItemContent}>
			<div className={styles.title}>
				{title}
			</div>

			<div className={styles.buttons}>
				<input
					type="image"
					className={styles.button}
					width={18}
					height={18}
					src="/img/list-item-edit.svg"
					id={id}
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
};

export default ListItemContent;
