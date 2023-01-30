import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";
import { memo } from 'react';
import cn from 'classnames';
import CrazyClock from '../CrazyClock';

const Main = memo(({ isMenuActive, setTrackModalActive, setAddTimerModalActive, setEditTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerTitle, setTimerDate, setTrackId, setEditTimerId, isTimerActive, setTimerActive, audioRef, stopAudio }: any) => {
	const clock = () => {
		if (isTimerActive) {
			return <CrazyClock
				setTimerActive={setTimerActive}
				stopAudio={stopAudio}
			/>;
		}

		return <Clock frameRate={1000} />;
	}

	return (
		<main className={styles.main}>
			<div className={cn(styles.clockWrapper, { [styles.clockWrapper_short]: isMenuActive })}>
				{clock()}
			</div>

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

				setTimerActive={setTimerActive}

				audioRef={audioRef}
			/>
		</main>
	);
});

export default Main;
