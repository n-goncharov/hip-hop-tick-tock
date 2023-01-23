import styles from './Header.module.scss';
import cn from "classnames";
import { memo, useEffect } from 'react';

const Header = memo(({ isMenuActive, setMenuStatus }: any) => {
	useEffect(() => {
		console.log('Header');
	});

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>HipHopTickTock</h1>
			<button
				className={cn(styles.burger, { [styles.burgerActive]: isMenuActive })}
				onClick={() => setMenuStatus((isMenuActive: any) => !isMenuActive)}
			>
				<img
					width={25}
					height={35}
					src="/img/burger.svg"
					alt=""
				/>
			</button>
		</header>
	);
});

export default Header;
