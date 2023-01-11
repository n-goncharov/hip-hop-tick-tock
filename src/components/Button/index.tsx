import styles from './Button.module.scss'

const Button = (props: any) => {
	return (
		<button className={styles['button']} onClick={props.onClick}>
			<img className={styles['button__img']} src={`/img/${props.name}`} alt="" />
			<span className={styles['button__title']}>{props.title}</span>
		</button>
	);
}

export default Button;
