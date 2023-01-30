import { memo } from 'react';
import styles from './ChangeTheme.module.scss';

const ChangeTheme = memo(() => {
	return (
		<div className={styles.themeToggle}>
			<h2>Тёмная тема</h2>
			<img src="/img/toggle-theme.svg" alt="" />
		</div>
	);
});

export default ChangeTheme;
