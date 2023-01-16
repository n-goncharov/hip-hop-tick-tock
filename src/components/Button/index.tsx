import styles from './Button.module.scss';

const Button = ({ title, name, showModal }: any) => {
	return (
		<button
			className={styles.button}
			onClick={showModal}
		>
			<img
				className={styles.buttonImg}
				src={`/img/${name}`}
				alt=""
			/>
			<span className={styles.buttonTitle}>{title}</span>
		</button>
	);
}

export default Button;
