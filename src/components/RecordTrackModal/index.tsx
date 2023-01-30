import styles from './RecordTrackModal.module.scss'
import Modal from "../Modal";
import { memo } from 'react';

const RecordTrackModal = memo(({ title, isModalActive, setModalActive }: any) => {
	return (
		<Modal
			title={title}
			isModalActive={isModalActive}
			setModalActive={setModalActive}
		>
			<input type="text" />
			<div className={styles.buttons}>
				<input
					type="image"
					width={49}
					height={49}
					src='/img/accept-modal.png'
				/>

				<input
					type="image"
					width={49}
					height={49}
					src='/img/close-modal.png'
					onClick={() => setModalActive(false)}
				/>
			</div>
		</Modal>
	);
});

export default RecordTrackModal;
