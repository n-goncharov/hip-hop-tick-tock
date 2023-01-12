import styles from './Header.module.scss';

const Header = ({ isMenuActive, setMenuStatus }: any) => {
	return (
		<header className={styles.header}>
			<h1 className={styles['app-name']}>HipHopTickTock</h1>
			<button
				className={`${styles.burger} ${isMenuActive ? styles['burger_active'] : ''}`}
				onClick={() => setMenuStatus(!isMenuActive)}
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
