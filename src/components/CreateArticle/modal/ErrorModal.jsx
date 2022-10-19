import Modal from '../../Modal/Modal';
import styles from './ErrorModal.module.scss';

const ErrorModal = ({ isOpen, handleClose }) => {
	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<div className={styles.error_modal}>
				<h2 className={styles.title}>Datos Incompletos</h2>
				<p className={styles.p}>Rellene todos lo campos para continuar</p>
			</div>
		</Modal>
	);
};

export default ErrorModal;
