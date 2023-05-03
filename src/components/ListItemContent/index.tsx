import { FC } from 'react';
import styles from './ListItemContent.module.scss';

interface IListItemContentProps {
	id: string;
	title: string | React.ReactNode;
	handleEdit: () => void;
	handleRemove: (e: React.MouseEvent<HTMLElement>) => void;
}

const ListItemContent: FC<IListItemContentProps> = ({
	id,
	title,
	handleEdit,
	handleRemove
}) => {
	return (
		<div className={styles.listItemContent}>
			<div className={styles.title}>
				{title}
			</div>

			<div className={styles.buttons}>
				<svg
					className={styles.button}
					onClick={handleEdit}
					width="18px"
					height="18px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>

				<input
					type="image"
					className={styles.button}
					src="img/list-item-delete.svg"
					alt=""
					id={id}
					onClick={handleRemove}
				/>
			</div>
		</div>
	);
};

export default ListItemContent;
