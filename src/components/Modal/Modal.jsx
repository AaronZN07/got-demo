import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Modal = ({ children, isOpen, handleClose, padding = true }) => {
	const modalRoot = document.getElementById('modal');
	const handleModal = e => e.stopPropagation();

	useEffect(() => {
		isOpen
			? document.body.classList.add('fixed_body')
			: document.body.classList.remove('fixed_body');
	}, [isOpen]);

	return ReactDOM.createPortal(
		<article
			className={`${styles.modal} ${isOpen ? styles.is_open : styles.is_close}`}
			onClick={handleClose}
		>
			<div
				className={`${styles.modal_container} ${padding ? styles.padding : ''}`}
				onClick={handleModal}
			>
				<button className={styles.close_modal} onClick={handleClose}>
					<FontAwesomeIcon icon={faClose} />
				</button>
				{children}
			</div>
		</article>,
		modalRoot
	);
};

export default Modal;
