import styles from './RecordTrackModal.module.scss'
import Modal from "../Modal";

const RecordTrackModal = ({ title, isModalOpen, closeModal }: any) => {
	return (
		<Modal
			title={title}
			isModalOpen={isModalOpen}
			closeModal={closeModal}
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
						onClick={closeModal}
					/>
				</div>
		</Modal>
	);
}

export default RecordTrackModal;
