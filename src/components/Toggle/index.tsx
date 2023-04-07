import { useState } from 'react';
import styles from './Toggle.module.scss';
import cn from 'classnames';

const Toggle = ({ onChange, theme, themes }: any) => {
	return (
		<div className={styles.toggle}>
			<h2 className={styles.title}>Сменить тему</h2>

			<button
				className={cn(styles.toggleButton, {[styles.toggleButton_active]: theme === themes.dark})}
				onClick={onChange}
			>
			</button>
		</div>
	);
};

export default Toggle;
