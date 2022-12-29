import styles from './Header.module.scss'

function Header(props: any) {
	return (
		<header className={styles.header}>
			<h1 className="">HipHopTickTock</h1>
			<img width={46} height={32} src="/img/burger-menu.svg" alt="" />
		</header>
	);
}

export default Header;
