import Clock from "../Clock";
import Sidebar from "../Sidebar";
import styles from './Main.module.scss'

function Main() {
	return (
		<main className={styles.main}>
			<Clock />
			<Sidebar />
		</main>
	);
}

export default Main;
