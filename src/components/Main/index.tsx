import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";
import { memo, useEffect } from 'react';

const Main = memo(({ isMenuActive, setTrackModalActive, setTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerName, setTimerDate, setTrackId }: any) => {
	useEffect(() => {
		console.log('Main');
	});

	return (
		<main className={styles.main}>
			<Clock />

			<Menu
				isMenuActive={isMenuActive}
				setTrackModalActive={setTrackModalActive}
				setTimerModalActive={setTimerModalActive}
				timerList={timerList}
				setTimerList={setTimerList}
				trackList={trackList}
				setTrackList={setTrackList}
				setTimerName={setTimerName}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}
			/>
		</main>
	);
});

export default Main;
