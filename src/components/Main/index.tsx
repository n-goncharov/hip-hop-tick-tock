import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";
import { memo } from 'react';
import cn from 'classnames';
import CrazyClock from '../CrazyClock';

const Main = memo(({ isMenuActive, setAddTimerModalActive, setEditTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerTitle, setTimerDate, setTrackId, setEditTimerId, isTimerActive, setTimerActive, audioRef, stopAudio, timerIdRef, timerDateRef }: any) => {
	const openAddTimerModal = () => {
		setTimerTitle('');
		setTimerDate('');
		setTrackId('');
		setAddTimerModalActive(true);
	};

	const clock = () => {
		if (isTimerActive) {
			return (
				<CrazyClock
					isMenuActive={isMenuActive}
					setTimerActive={setTimerActive}
					stopAudio={stopAudio}
				/>
			);
		}

		return (
			<Clock
				isMenuActive={isMenuActive}
				frameRate={1000}
				hourHand={
					<div
						className={styles.hourHand}
					>
					</div>
				}

				minuteHand={
					<div
						className={styles.minuteHand}
					>
					</div>
				}

				secondHand={
					<div
						className={styles.secondHand}
					>
					</div>
				}
				onClick={openAddTimerModal}
			/>
		);
	}

	return (
		<main className={styles.main}>
			<div className={cn(styles.currentTimer, { [styles.currentTimer_active]: isTimerActive })}>
				<div>
					Таймер: {timerIdRef.current}
				</div>

				<div>
					Время: {timerDateRef.current}
				</div>
			</div>

			<div className={cn(styles.clockWrapper, { [styles.clockWrapper_menuActive]: isMenuActive })}>
				{clock()}
			</div>

			<Menu
				isMenuActive={isMenuActive}

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
				timerIdRef={timerIdRef}
				timerDateRef={timerDateRef}
			/>
		</main>
	);
});

export default Main;
