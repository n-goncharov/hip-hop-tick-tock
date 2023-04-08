import styles from './TimerModal.module.scss'
import Modal from "../Modal";

const TimerModal = ({ title, isModalActive, setModalActive, trackList, timerTitle, timerDate, trackId, setTimerTitle, setTimerDate, setTrackId, handleTimer }: any) => {
	return (
		<Modal
			title={title}
			isModalActive={isModalActive}
			setModalActive={setModalActive}
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

					<div className={styles.tracksWrapper}>
						{trackList.map((track: any) => (
							<label className={styles.label} key={track.id}>
								<input
									className={styles.inputRadio}
									type="radio"
									value={track.id}
									checked={trackId === track.id}
									onChange={(e) => setTrackId(e.target.value)}
								/>
								{track.title}
							</label>
						))}
					</div>
				</div>

				<div className={styles.buttons}>
					<svg
						className={styles.acceptButton}
						onClick={handleTimer}
						xmlns="http://www.w3.org/2000/svg"
						width="49"
						height="49"
						fill="currentColor"
						viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
					</svg>

					<input
						type="image"
						alt=""
						width={49}
						height={49}
						src='img/close-modal.png'
						onClick={() => setModalActive(false)}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default TimerModal;
