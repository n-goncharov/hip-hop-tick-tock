import { useEffect } from 'react';
import styles from './Button.module.scss';

const Button = ({ title, name, setModalOpen }: any) => {
	useEffect(() => {
		console.log('Button');
	});

	return (
		<button
			className={styles.button}
			onClick={() => setModalOpen(true)}
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
