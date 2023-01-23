import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ title, isModalActive, setModalActive, children }: any) => {
	useEffect(() => {
		console.log('Modal');
	});

	if (!isModalActive) {
		return null;
	}

	return (
		<div
			className={styles.modal}
			onClick={() => setModalActive(false)}
		>
			<div
				className={styles.content}
				onClick={e => e.stopPropagation()}
			>
				<h2 className={styles.title}>
					{title}
				</h2>

				{children}
			</div>
		</div>
	);
}

export default Modal;
