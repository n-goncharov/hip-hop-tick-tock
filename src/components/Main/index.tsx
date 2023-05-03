import styles from './Main.module.scss';
import Clock from "../Clock";
import Menu from "../Menu";
import cn from 'classnames';
import CrazyClock from '../CrazyClock';
import { FC, MutableRefObject } from 'react';
import ITrack from "../../shared/interfaces/track";
import ITimer from "../../shared/interfaces/timer";

interface IMainProps {
	isMenuActive: boolean;
	setAddTimerModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	setEditTimerModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	timerList: ITimer[];
	setTimerList: React.Dispatch<React.SetStateAction<ITimer[]>>;
	trackList: ITrack[];
	setTrackList: React.Dispatch<React.SetStateAction<ITrack[]>>;
	setTimerTitle: React.Dispatch<React.SetStateAction<string>>;
	setTimerDate: React.Dispatch<React.SetStateAction<string>>;
	setTrackId: React.Dispatch<React.SetStateAction<string>>;
	setEditTimerId: React.Dispatch<React.SetStateAction<string>>;
	isTimerActive: boolean;
	setTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
	audioRef: MutableRefObject<HTMLAudioElement | undefined>;
	stopAudio: () => void;
	timerIdRef: MutableRefObject<string>;
	timerDateRef: MutableRefObject<string>;
}

const Main: FC<IMainProps> = ({
	isMenuActive,
	setAddTimerModalActive,
	setEditTimerModalActive,
	timerList,
	setTimerList,
	trackList,
	setTrackList,
	setTimerTitle,
	setTimerDate,
	setTrackId,
	setEditTimerId,
	isTimerActive,
	setTimerActive,
	audioRef,
	stopAudio,
	timerIdRef,
	timerDateRef
}) => {
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
					Время: <span>{timerDateRef.current?.toString()}</span>
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
};

export default Main;
