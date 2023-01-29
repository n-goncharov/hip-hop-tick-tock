import Clock from '../Clock'
import styles from './CrazyClock.module.scss';

const CrazyClock = ({ setTimerActive, stopAudio }: any) => {
	const handleClick = () => {
		stopAudio();
		setTimerActive(false);
	};

	return (
		<>
			<Clock frameRate={1} />

			<button
				className={styles.stopTimer}
				onClick={handleClick}
			/>
		</>
	);
}

export default CrazyClock;
