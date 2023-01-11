import styles from './ChangeTheme.module.scss'

function ChangeTheme() {
	return (
		<div className={styles['theme-toggle']}>
			<h2>Тёмная тема</h2>
			<img src="/img/toggle-theme.svg" alt="" />
		</div>
	);
}

export default ChangeTheme;
