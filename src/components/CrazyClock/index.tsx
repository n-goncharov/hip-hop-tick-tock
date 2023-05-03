import { FC } from 'react';
import Clock from '../Clock';
import styles from './CrazyClock.module.scss';

interface ICrazyClockProps {
	isMenuActive: boolean;
	setTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
	stopAudio: () => void;
}

const CrazyClock: FC<ICrazyClockProps> = ({
	isMenuActive,
	setTimerActive,
	stopAudio
}) => {
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
				onClick={handleClick}
			/>
		</>
	);
};

export default CrazyClock;
