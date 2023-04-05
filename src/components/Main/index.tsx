import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";
import { memo } from 'react';
import cn from 'classnames';
import CrazyClock from '../CrazyClock';

const Main = memo(({ isMenuActive, setTrackModalActive, setAddTimerModalActive, setEditTimerModalActive, timerList, setTimerList, trackList, setTrackList, setTimerTitle, setTimerDate, setTrackId, setEditTimerId, isTimerActive, setTimerActive, audioRef, stopAudio, timerIdRef, timerDateRef }: any) => {
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
					setTimerActive={setTimerActive}
					stopAudio={stopAudio}
				/>
			);
		}

		return (
			<Clock
				frameRate={1000}
				hourHand={
					<img
						className={styles.hourHand}
						width={30.5}
						height={144}
						src="img/hour-hand.png"
						alt=""
					/>
				}
				minuteHand={
					<img
						className={styles.minuteHand}
						width={23.5}
						height={275}
						src="img/minute-hand.png"
						alt=""
					/>
				}
				secondHand={
					<img
						className={styles.secondHand}
						width={12}
						height={274}
						src="img/second-hand.png"
						alt=""
					/>
				}
				buttonSrc='img/add-timer-button.svg'
				onClick={openAddTimerModal}
			/>
		);
	}

	return (
		<main className={styles.main}>
			<div className={cn(styles.currentTimer, { [styles.currentTimer_visible]: isTimerActive })}>
				Пришло время!

				<div>
					{timerIdRef.current}
				</div>

				<div>
					{timerDateRef.current}
				</div>
			</div>

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
				timerIdRef={timerIdRef}
				timerDateRef={timerDateRef}
			/>
		</main>
	);
});

export default Main;
