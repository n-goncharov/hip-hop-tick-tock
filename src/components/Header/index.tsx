import styles from './Header.module.scss'

const Header = ({ isMenuActive, setMenuStatus }: any) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.appName}>HipHopTickTock</h1>
			<button className={`${styles.burgerMenu} ${isMenuActive ? styles.burgerActive : ''}`} onClick={() => setMenuStatus(!isMenuActive)}>
				<img width={25} height={35} src="/img/burger-menu.svg" alt="" />
			</button>
		</header>
	);
}

export default Header;
