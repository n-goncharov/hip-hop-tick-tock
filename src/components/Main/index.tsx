import Clock from "../Clock";
import Menu from "../Menu";
import styles from './Main.module.scss';

const Main = ({ isMenuActive, showTrackModal, showTimerModal }: any) => {
	return (
		<main className={styles.main}>
			<Clock />
			<Menu isMenuActive={isMenuActive} showTrackModal={showTrackModal} showTimerModal={showTimerModal} />
		</main>
	);
}

export default Main;
