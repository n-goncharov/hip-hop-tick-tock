import styles from './Button.module.scss'

const Button = (props: any) => {
	return (
		<button className={styles['btn']}>
			<img className={styles['btn__img']} src="/img/add-button.png" alt="" />
			<span>{props.title}</span>
		</button>
	);
}

export default Button;
