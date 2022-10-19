import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import modalCore from './Modal.module.scss';
import styles from './SeccessModal.module.scss';

const SuccessModal = ({ isOpen, handleClose, message }) => {
	return (
		<Modal isOpen={isOpen} handleClose={handleClose} padding={false}>
			<div className={styles.succes_modal}>
				<div className={`${modalCore.hero} ${styles.hero_succes}`}>
					<span className={modalCore.icon}>
						<FontAwesomeIcon icon={faCircleCheck} />
					</span>
				</div>
				<div className={modalCore.message}>
					<h2 className={modalCore.title}>Exito!</h2>
					<p className={modalCore.p}>{message}</p>
				</div>
				<div className={modalCore.button_close}>
					<button
						className={styles.button_success}
						onClick={handleClose}
						type={'button'}
					>
						Aceptar
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default SuccessModal;
