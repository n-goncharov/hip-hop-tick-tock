import { memo, useEffect, useState } from "react";
import styles from "./Clock.module.scss"

const Clock = memo(({ frameRate, }: any) => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	const [secondsDegree, setSecondsDegree] = useState(seconds * 6);
	const [minutesDegree, setMinutesDegree] = useState(minutes * 6 + seconds * 0.1);
	const [hoursDegree, setHoursDegree] = useState(hours * 30 + minutes * 0.5 + seconds / 120);

	const updateTime = () => {
		setSecondsDegree((secondsDegree) => (secondsDegree + 6) % 360)
		setMinutesDegree((minutesDegree) => (minutesDegree + 0.1) % 360);
		setHoursDegree((hoursDegree) => (hoursDegree + 1 / 120) % 360);
	}

	useEffect(() => {
		const timerId = setInterval(updateTime, frameRate);
		return () => clearInterval(timerId);
	}, []);

	return (
		<div className={styles.clock}>
			<div className={styles.hourWrapper}><div className={styles.hour}>12</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>1</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>2</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>3</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>4</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>5</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>6</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>7</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>8</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>9</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>10</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>11</div></div>

			<div className={styles.hourHandWrapper} style={{ transform: `rotate(${hoursDegree}deg)` }}>
				<img
					className={styles.hourHand}
					width={30.5}
					height={144}
					src="/img/hour-hand.png"
					alt=""
				/>
			</div>

			<div className={styles.minuteHandWrapper} style={{ transform: `rotate(${minutesDegree}deg)` }}>
				<img
					className={styles.minuteHand}
					width={23.5}
					height={275}
					src="/img/minute-hand.png"
					alt=""
				/>
			</div>

			<div className={styles.secondHandWrapper} style={{ transform: `rotate(${secondsDegree}deg)` }}>
				<img
					className={styles.secondHand}
					width={12}
					height={274}
					src="/img/second-hand.png"
					alt=""
				/>
			</div>

			<img
				className={styles.center}
				width={10}
				height={10}
				src="/img/center.png"
				alt=""
			/>
		</div>
	);
});

export default Clock;
