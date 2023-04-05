import styles from './Toggle.module.scss';

const Toggle = ({ onChange }: any) => (
	<div className={styles.toggle}>
		<h2 className={styles.title}>Сменить тему</h2>

		<button

			onClick={onChange}
		>
			Сменить тему
		</button>
	</div>
);

export default Toggle;
