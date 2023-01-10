import styles from './ListBox.module.scss'
import { useState } from "react";

const ListBox = (props: any) => {
	const [isListOpen, setListStatus] = useState(false);

	return (
		<details className={styles['list-box']} >
			<summary className={styles.summary} onClick={() => setListStatus(!isListOpen)}>
				<h2 className={styles['list-title']}>{props.title}</h2>
				<img className={`${isListOpen ? styles['list-arrow'] : ''}`} style={{transition: '0.3s'}} src='/img/arrow-down.svg' alt="" />
			</summary>

			<div className={styles['btns-container']}>{props.buttons}</div>

			<ul className={styles.list}>
				{props.children}
			</ul>
		</details>
	);
}

export default ListBox;
