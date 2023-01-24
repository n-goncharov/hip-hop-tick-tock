import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";
import { memo, useEffect } from 'react';

const Main = memo(({ isMenuActive, setTrackModalActive, setAddTimerModalActive, setEditTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerTitle, setTimerDate, setTrackId, setEditTimerId }: any) => {
	useEffect(() => {
		// console.log('Main');
	});

	return (
		<main className={styles.main}>
			<Clock />

			<Menu
				isMenuActive={isMenuActive}

				setTrackModalActive={setTrackModalActive}
				setAddTimerModalActive={setAddTimerModalActive}
				setEditTimerModalActive={setEditTimerModalActive}

				timerList={timerList}
				setTimerList={setTimerList}

				trackList={trackList}
				setTrackList={setTrackList}

				setTimerTitle={setTimerTitle}
        setTimerDate={setTimerDate}
        setTrackId={setTrackId}

				setEditTimerId={setEditTimerId}
			/>
		</main>
	);
});

export default Main;
