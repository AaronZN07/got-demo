import Modal from '../../Modal/Modal';
import modalStyles from './modal.module.scss';

const ExitModal = ({ showModal, cancelNavigation, confirmNavigation }) => {
	return (
		<Modal isOpen={showModal} handleClose={cancelNavigation}>
			<div className='text-center'>
				<h2>Salir</h2>
				<div className='mb-5'>
					<p>
						Hay cambios sin guardar. No hay forma de recuperar el blog
						<span className='block'>¿Desea Continuar?</span>
					</p>
				</div>
				<div className='flex gap-5 justify-center items-center'>
					<button
						className={`${modalStyles.button} ${modalStyles.button_danger}`}
						onClick={confirmNavigation}
					>
						Salir
					</button>
					<button
						className={`${modalStyles.button} ${modalStyles.button_success}`}
						onClick={cancelNavigation}
					>
						Quedarse
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ExitModal;
