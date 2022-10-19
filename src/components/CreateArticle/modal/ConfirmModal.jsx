import Modal from '../../Modal/Modal';
import modalStyles from './modal.module.scss';

const ConfirmModal = ({ isOpen, handleClose, handleNewForm }) => {
	const handleNew = () => {
		handleNewForm();
		handleClose();
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<div className={'text-center'}>
				<h2>Nuevo blog</h2>
				<p className='my-5'>
					Se perderan todos los cambios sin guardar
					<span className='block'>¿Desea Continuar?</span>
				</p>
				<div className='flex gap-5 justify-center items-center'>
					<button
						className={`${modalStyles.button} ${modalStyles.button_danger}`}
						onClick={handleNew}
					>
						Crear Nuevo
					</button>
					<button
						className={`${modalStyles.button} ${modalStyles.button_success}`}
						onClick={handleClose}
					>
						Volver
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmModal;
