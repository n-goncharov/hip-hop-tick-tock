import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";

const Main = ({ isMenuActive, showTrackModal, showTimerModal, timerList, setTimerList, trackList, setTrackList }: any) => {
	return (
		<main className={styles.main}>
			<Clock />
			<Menu
				isMenuActive={isMenuActive}
				showTrackModal={showTrackModal}
				showTimerModal={showTimerModal}
				timerList={timerList}
				setTimerList={setTimerList}
				trackList={trackList}
				setTrackList={setTrackList}
			/>
		</main>
	);
}

export default Main;
