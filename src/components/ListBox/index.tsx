import styles from './ListBox.module.scss'
import { useState } from "react";

const ListBox = (props: any) => {
	const [isOpen, setStatus] = useState(false);

	let src = '/img/arrow-down.svg';

	if (isOpen) {
		src = '/img/arrow-up.svg'
	}

	return (
		<details className={styles['list-box']} >
			<summary className={styles.summary} onClick={() => setStatus(!isOpen)}>
				<h2 className={styles['list-title']}>{props.title}</h2>
				<img src={src} alt="" />
			</summary>

			<div className={styles['btns-container']}>{props.buttons}</div>

			<ul className={styles.list}>
				{props.children}
			</ul>
		</details>
	);
}

export default ListBox;
