import styles from './Modal.module.scss';

const Modal = ({ title, isModalOpen, closeModal, children }: any) => {
	if (!isModalOpen) {
		return null;
	}

	return (
		<div
			className={styles.modal}
			onClick={closeModal}
		>
			<div
				className={styles.content}
				onClick={e => e.stopPropagation()}
			>
				<h2 className={styles.title}>
					{title}
				</h2>

				{children}

				<div className={styles.buttonsContainer}>
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
			</div>
		</div>
	);
}

export default Modal;
