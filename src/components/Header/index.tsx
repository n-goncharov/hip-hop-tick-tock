import styles from './Header.module.scss';
import cn from "classnames";
import { FC } from 'react';

interface IHeaderProps {
	isMenuActive: boolean;
	setMenuStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({
	isMenuActive,
	setMenuStatus
}) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>HipHopTickTock</h1>

			<div
				className={cn(styles.burger, { [styles.burgerActive]: isMenuActive })}
				onClick={() => setMenuStatus((isMenuActive) => !isMenuActive)}
			>
				<img
					width={25}
					height={35}
					src="img/burger.svg"
					alt=""
				/>
			</div>
		</header>
	);
};

export default Header;
