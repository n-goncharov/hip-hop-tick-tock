import Modal from "../Modal";

const AddTimerModal = ({ title, isModalOpen, closeModal }: any) => {
	return (
		<Modal
			title={title}
			isModalOpen={isModalOpen}
			closeModal={closeModal}
		>
			<input type="text" />
			контент
		</Modal>
	);
}

export default AddTimerModal;
