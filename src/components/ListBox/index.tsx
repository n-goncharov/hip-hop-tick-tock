import styles from './ListBox.module.scss';
import cn from "classnames";
import { FC, useState } from "react";

interface IListBoxProps {
	title: string;
	buttons: React.ReactNode;
	items: React.ReactNode[];
}

const ListBox: FC<IListBoxProps> = ({
	title,
	buttons,
	items
}) => {
	const [isListActive, setListActive] = useState(false);

	return (
		<details className={styles.details}>
			<summary
				className={styles.summary}
				onClick={() => setListActive((isListActive) => !isListActive)}
			>
				<h2 className={styles.title}>{title}</h2>

				<div
					className={cn(styles.arrow, { [styles.arrowOpen]: isListActive })}
				>
				</div>
			</summary>

			<div className={styles.buttonsContainer}>
				{buttons}
			</div>
			<ul className={styles.list}>
				{items}
			</ul>
		</details>
	);
};

export default ListBox;
