import styles from './ListBox.module.scss'

const ListBox = (props: any) => {
	return (
		<details className="">
			<summary>
				<h2 className={styles.listTitle}>{props.title}</h2>
			</summary>
			<div className="buttonsContainer">{props.buttons}</div>
			<ul>
				{props.list}
			</ul>
		</details>
	);
}

export default ListBox;
