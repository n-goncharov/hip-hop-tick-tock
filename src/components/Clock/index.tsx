import { memo, useEffect } from "react";
import styles from "./Clock.module.scss"

const Clock = memo(() => {
	useEffect(() => {
		// console.log('Clock');
	});

	return (
		<div className={styles.clock}>
			<div className={styles.hourWrapper}><div className={styles.hour}>12</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>13</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>14</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>15</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>16</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>17</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>18</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>19</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>20</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>21</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>22</div></div>
			<div className={styles.hourWrapper}><div className={styles.hour}>23</div></div>
		</div>
	);
});

export default Clock;
