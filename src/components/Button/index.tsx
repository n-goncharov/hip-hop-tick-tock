import styles from './Button.module.scss';

const Button = ({ title, name, onClick }: any) => {
	return (
		<div
			className={styles.button}
			onClick={onClick}
		>
			<img
				className={styles.img}
				src={`img/${name}`}
				alt=""
			/>

			<span className={styles.title}>{title}</span>
		</div>
	);
};

export default Button;
