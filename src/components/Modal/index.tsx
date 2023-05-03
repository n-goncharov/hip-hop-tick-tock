import styles from './Modal.module.scss';
import cn from 'classnames';
import { FC } from 'react';

interface IModalProps {
	title: string;
	isModalActive: boolean;
	setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({
	title,
	isModalActive,
	setModalActive,
	children
}) => {
	return (
		<div
			className={cn(styles.modalOverlay, { [styles.modalOverlay_visible]: isModalActive })}
			onClick={() => setModalActive(false)}
		>
			<div className={styles.modal}>
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
		</div>
	);
};

export default Modal;
