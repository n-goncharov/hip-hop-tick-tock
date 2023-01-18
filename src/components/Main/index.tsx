import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";

const Main = ({ isMenuActive, showTrackModal, showTimerModal, timerList, updateTimerList }: any) => {
	return (
		<main className={styles.main}>
			<Clock />
			<Menu
				isMenuActive={isMenuActive}
				showTrackModal={showTrackModal}
				showTimerModal={showTimerModal}
				timerList={timerList}
				updateTimerList={updateTimerList}
			/>
		</main>
	);
}

export default Main;
