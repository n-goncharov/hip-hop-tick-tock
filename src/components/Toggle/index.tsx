import styles from './Toggle.module.scss';
import cn from 'classnames';
import { FC } from 'react';
import IThemes from "../../shared/interfaces/themes"

interface IToggleProps {
	onClick: () => void;
	theme: string;
	themes: IThemes;
}

const Toggle: FC<IToggleProps> = ({
	onClick,
	theme,
	themes
}) => {
	return (
		<div className={styles.toggle}>
			<h2 className={styles.title}>Тёмная тема</h2>

			<button
				className={cn(styles.toggleButton, {[styles.toggleButton_active]: theme === themes.dark})}
				onClick={onClick}
			>
			</button>
		</div>
	);
};

export default Toggle;
