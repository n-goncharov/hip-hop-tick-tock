import Clock from "../Clock";
import Menu from "../Menu";
import styles from './Main.module.scss'

const Main = ({ isMenuActive }: any) => {
	return (
		<main className={styles.main}>
			<Clock />
			<Menu isMenuActive={isMenuActive} />
		</main>
	);
}

export default Main;
