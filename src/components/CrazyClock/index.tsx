import Clock from '../Clock';
import styles from './CrazyClock.module.scss';

const CrazyClock = ({ isMenuActive, setTimerActive, stopAudio }: any) => {
	const handleClick = () => {
		stopAudio();
		setTimerActive(false);
	};

	const hourHand = <div className={styles.hourHand}>AAAAA!</div>;
	const minuteHand = <div className={styles.minuteHand}>AAAAAAAA!</div>;
	const secondHand = <div className={styles.secondHand}>AAAAAAAAAAАAAAAA!</div>;

	return (
		<>
			<Clock
				isMenuActive={isMenuActive}
				frameRate={1}
				hourHand={hourHand}
				minuteHand={minuteHand}
				secondHand={secondHand}
				buttonSrc='img/stop-timer-button.svg'
				onClick={handleClick}
			/>
		</>
	);
};

export default CrazyClock;
