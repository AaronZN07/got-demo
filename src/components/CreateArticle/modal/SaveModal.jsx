import { useState } from 'react';
import Modal from '../../Modal/Modal';
import styles from './SaveModal.module.scss';
import modalStyles from './modal.module.scss';

const EXTENSION = '.gotblog';

const SaveModal = ({
	isOpen,
	handleClose,
	form,
	handleSaveForm,
	section,
	setName,
	name,
	save,
}) => {
	const [validate, setValidate] = useState({ message: '', state: false });

	const handleSave = () => {
		if (!save) return;

		if (name.trim() === '' || name.trim().length < 3) {
			setValidate({
				message: 'El nombre no puede ir vacio',
				state: true,
			});
			return;
		}

		if (!validate.state) {
			const blog = {
				form: JSON.stringify(form),
				sections: JSON.stringify(section),
			};

			localStorage.setItem(`${name}${EXTENSION}`, JSON.stringify(blog));
			handleSaveForm();
			handleClose();
		}
	};

	const handleChange = e => {
		setName(e.target.value);
		if (name.trim() === '' || name.trim().length < 3) {
			setValidate({
				message: 'El nombre no puede ir vacio',
				state: true,
			});
		} else {
			setValidate({
				message: '',
				state: false,
			});
		}
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<div className={styles.save_modal}>
				<h2>Guardar Blog</h2>
				<input type='text' value={name} onChange={e => handleChange(e)} />
				{validate.state && <span>{validate.message}</span>}
				<button
					className={`${modalStyles.button} ${modalStyles.button_success}`}
					onClick={handleSave}
				>
					Guardar
				</button>
			</div>
		</Modal>
	);
};

export default SaveModal;
