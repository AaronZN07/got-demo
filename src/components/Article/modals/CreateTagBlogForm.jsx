import { useState } from 'react';
import ContainerInput from '../../Form/ContainerInput';
import Input from '../../Form/Input';
import styles from './CategoryTagsBlog.module.scss';
import modalCore from '../../Modal/Modal.module.scss';

const CreateTagBlogForm = ({ form, setForm, setIsAdding }) => {
	const [validate, setValidate] = useState({});

	const handleSubmit = e => {
		e.preventDefault();

		if (form.category_name === false || validate.category_name === true) return;

		if (form.id) {
			alert('Se actualiza');
			return;
		}

		alert('Se Inserta');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Añadir Categoria</h2>
			<ContainerInput alterClass={styles.container}>
				<Input
					errorMessage={'El nombre de la etiqueta no puede ir vacio'}
					form={form}
					name={'tag_name'}
					placeholder={'Nombre de la etiqueta'}
					regex={/^.{1,50}$/}
					setForm={setForm}
					setValidate={setValidate}
					type={'text'}
					validate={validate}
				/>
				<div className={styles.actions}>
					<div className={`${modalCore.button_close} ${styles.button_add}`}>
						<button type={'submit'}>Añadir Etiqueta</button>
					</div>
					<div className={modalCore.button_close}>
						<button
							className={styles.button_back}
							onClick={() => setIsAdding(false)}
							type={'button'}
						>
							Volver
						</button>
					</div>
				</div>
			</ContainerInput>
		</form>
	);
};

export default CreateTagBlogForm;
