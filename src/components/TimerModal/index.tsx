import styles from './TimerModal.module.scss'
import Modal from "../Modal";

const TimerModal = ({ title, isModalActive, handleClose, trackList, timerTitle, timerDate, trackId, setTimerTitle, setTimerDate, setTrackId, handleTimer }: any) => {
	return (
		<Modal
			title={title}
			isModalActive={isModalActive}
			handleClose={handleClose}
			className={styles.modal}
		>
			<div className={styles.addTimerModal}>
				<div className={styles.content}>
					<input
						id={timerTitle}
						value={timerTitle}
						type="text"
						placeholder="Введите название таймера"
						onChange={(e) => setTimerTitle(e.target.value)}
					/>

					<input
						id='timerDate'
						value={timerDate}
						className={styles.date}
						type="datetime-local"
						onChange={(e) => setTimerDate(e.target.value)}
					/>

					{trackList.map((track: any) => (
						<label className={styles.label} key={track.id}>
							<input
								type="radio"
								value={track.id}
								checked={trackId === track.id}
								onChange={(e) => setTrackId(e.target.value)}
							/>
							{track.title}
						</label>
					))}
				</div>

				<div className={styles.buttons}>
					<input
						type="image"
						width={49}
						height={49}
						src='/img/accept-modal.png'
						onClick={handleTimer}
					/>

					<input
						type="image"
						width={49}
						height={49}
						src='/img/close-modal.png'
						onClick={handleClose}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default TimerModal;
