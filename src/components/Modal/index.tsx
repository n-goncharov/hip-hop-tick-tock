import styles from './Modal.module.scss';
import cn from 'classnames'

const Modal = ({ title, isModalActive, setModalActive, children }: any) => {
	return (
		<div
			className={cn(styles.modal, { [styles.modal_visible]: isModalActive })}
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
};

export default Modal;
