import styles from './ListBox.module.scss';
import cn from "classnames";
import { memo, useState } from "react";

const ListBox = memo(({ title, buttons, items }: any) => {
	const [isListActive, setListActive] = useState(false);

	return (
		<details className={styles.details}>
			<summary
				className={styles.summary}
				onClick={() => setListActive((isListActive) => !isListActive)}
			>
				<h2 className={styles.title}>{title}</h2>

				<img
					className={cn(styles.arrow, { [styles.arrowOpen]: isListActive })}
					width={18}
					height={18}
					src='/img/arrow.png'
					alt=""
				/>
			</summary>

			<div className={styles.buttonsContainer}>
				{buttons}
			</div>
			<ul className={styles.list}>
				{items}
			</ul>
		</details>
	);
});

export default ListBox;
