import styles from './Header.module.scss';
import cn from "classnames";

const Header = ({ isMenuActive, setMenuStatus }: any) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.appName}>HipHopTickTock</h1>
			<button
				className={cn(styles.burger, { [styles.burgerActive]: isMenuActive })}
				onClick={setMenuStatus}
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
}

export default Header;
