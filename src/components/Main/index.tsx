import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";

const Main = ({ isMenuActive, showTrackModal, showTimerModal }: any) => {
	return (
		<main className={styles.main}>
			<Clock />
			<Menu
				isMenuActive={isMenuActive}
				showTrackModal={showTrackModal}
				showTimerModal={showTimerModal}
			/>
		</main>
	);
}

export default Main;
