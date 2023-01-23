import styles from './ListBox.module.scss';
import cn from "classnames";
import { memo, useEffect, useState } from "react";

const ListBox = memo(({ title, buttons, items }: any) => {
	useEffect(() => {
		console.log('ListBox');
	});

	const [isListOpen, setListStatus] = useState(false);

	return (
		<details>
			<summary
				className={styles.summary}
				onClick={() => setListStatus((isListOpen) => !isListOpen)}
			>
				<h2 className={styles.title}>{title}</h2>
				<img
					className={cn(styles.arrow, { [styles.arrowOpen]: isListOpen })}
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
