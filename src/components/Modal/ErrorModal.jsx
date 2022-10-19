import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import modalCore from './Modal.module.scss';
import styles from './ModalError.module.scss';

const ErrorModal = ({ isOpen, handleClose, message }) => {
	return (
		<Modal isOpen={isOpen} handleClose={handleClose} padding={false}>
			<div className={styles.error_modal}>
				<div className={`${modalCore.hero} ${styles.hero_error}`}>
					<span className={modalCore.icon}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</span>
				</div>
				<div className={modalCore.message}>
					<h2 className={modalCore.title}>Ooops!</h2>
					<p className={modalCore.p}>{message}</p>
				</div>
				<div className={modalCore.button_close}>
					<button
						className={styles.button_error}
						onClick={handleClose}
						type={'button'}
					>
						Volver
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ErrorModal;
