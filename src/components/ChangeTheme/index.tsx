import { memo, useEffect } from 'react';
import styles from './ChangeTheme.module.scss';

const ChangeTheme = memo(() => {
	useEffect(() => {
		// console.log('ChangeTheme');
	});

	return (
		<div className={styles.themeToggle}>
			<h2>Тёмная тема</h2>
			<img src="/img/toggle-theme.svg" alt="" />
		</div>
	);
});

export default ChangeTheme;
