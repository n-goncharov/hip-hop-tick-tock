import { useEffect } from 'react';
import styles from './Button.module.scss';

const Button = ({ title, name, setModalActive }: any) => {
	useEffect(() => {
		// console.log('Button');
	});

	return (
		<button
			className={styles.button}
			onClick={() => setModalActive(true)}
		>
			<img
				className={styles.img}
				src={`/img/${name}`}
				alt=""
			/>

			<span className={styles.buttonTitle}>{title}</span>
		</button>
	);
}

export default Button;
