import styles from './Header.module.scss'

const Header = ({ isMenuActive, setMenuStatus }: any) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.appName}>HipHopTickTock</h1>
			<button className={`${styles.burgerMenu} ${isMenuActive ? styles.burgerActive : ''}`} onClick={() => setMenuStatus(!isMenuActive)}>
				<img width={34} height={32} src="/img/burger-menu.svg" alt="" />
			</button>
		</header>
	);
}

export default Header;
