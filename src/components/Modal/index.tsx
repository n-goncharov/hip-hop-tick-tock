import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ title, isModalActive, handleClose, children }: any) => {
	useEffect(() => {
		//console.log('Modal');
	});

	return (
		<>
			{isModalActive &&
				<div
					className={styles.modal}
					onClick={handleClose}
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
			}
		</>
	);
}

export default Modal;
