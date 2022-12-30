import styles from './Header.module.scss'

const Header = ({ isMenuActive, setMenuStatus }: any) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.appName}>HipHopTickTock</h1>
			<button className={isMenuActive ? `${styles.burgerMenu} ${styles.active}` : styles.burgerMenu} onClick={() => setMenuStatus(!isMenuActive)}>
				<img width={34} height={32} src="/img/burger-menu.svg" alt="" />
			</button>
		</header>
	);
}

export default Header;
