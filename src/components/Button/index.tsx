import styles from './Button.module.scss';

const Button = ({title, name, showModal}: any) => {
	return (
		<button className={styles['button']} onClick={showModal}>
			<img className={styles['button__img']} src={`/img/${name}`} alt="" />
			<span className={styles['button__title']}>{title}</span>
		</button>
	);
}

export default Button;
