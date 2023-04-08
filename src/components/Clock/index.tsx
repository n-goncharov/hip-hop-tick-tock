import { memo, useEffect, useState } from "react";
import styles from "./Clock.module.scss";
import cn from 'classnames';

const Clock = memo(({ isMenuActive, frameRate, hourHand, minuteHand, secondHand, buttonSrc, onClick }: any) => {
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
	}, [frameRate]);

	return (
		<>
			<div className={cn(styles.clock, { [styles.clock_menuActive]: isMenuActive })}>
				<div className={styles.hourWrapper}><div className={styles.hour}>12</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>1</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>2</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>3</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>4</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>5</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>6</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>7</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>8</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>9</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>10</div></div>
				<div className={cn(styles.hourWrapper, { [styles.hourWrapper_menuActive]: isMenuActive })}><div className={styles.hour}>11</div></div>

				<div className={styles.handsWrapper}>
					<div
						className={styles.hourHandWrapper}
						style={{ transform: `rotate(${hoursDegree}deg)` }}
					>
						{hourHand}
					</div>
					<div
						className={styles.minuteHandWrapper}
						style={{ transform: `rotate(${minutesDegree}deg)` }}
					>
						{minuteHand}
					</div>
					<div
						className={styles.secondHandWrapper}
						style={{ transform: `rotate(${secondsDegree}deg)` }}
					>
						{secondHand}
					</div>
				</div>

				<div
					className={styles.center}
				>
				</div>
			</div>

			<div
				className={styles.clockButton}
				onClick={onClick}
			>
				<img src={buttonSrc} alt="" />
			</div>
		</>
	);
});

export default Clock;
