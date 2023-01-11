import styles from './ListBox.module.scss'
import { useState } from "react";

const ListBox = (props: any) => {
	const [isListOpen, setListStatus] = useState(false);

	return (
		<details className={styles['list-box']} >
			<summary
				className={styles.summary}
				onClick={() => setListStatus(!isListOpen)}
			>
				<h2 className={styles['list-title']}>{props.title}</h2>
				<img
					className={`${styles['list-arrow']} ${isListOpen ? styles['list-arrow_open'] : ''}`}
					width={18}
					height={18}
					src='/img/arrow.png'
					alt=""
				/>
			</summary>

			<div className={styles['buttons-container']}>{props.buttons}</div>

			<ul className={styles.list}>
				{props.children}
			</ul>
		</details>
	);
}

export default ListBox;
