import { useState } from 'react';
import ContainerInput from '../Form/ContainerInput';
import Input from '../Form/Input';
import SimpleTextArea from '../Form/SimpleTextArea';
import styles from './ProductForm.module.scss';
import File from '../Form/File';
import CategoriesSelect from './CategoriesSelect';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleFiles from '../Form/MultipleFiles';
import { useModal } from '../../hooks/useModal';
import ErrorModal from '../Modal/ErrorModal';
import SuccesModal from '../Modal/SuccessModal';

const ProductForm = () => {
	const [isOpenError, handleOpenError, handleCloseError] = useModal(false);
	const [isOpenSucces, handleOpenSucces, handleCloseSucces] = useModal(false);
	const [form, setForm] = useState({});
	const [validate, setValidate] = useState({});

	const handleSubmit = e => {
		e.preventDefault();

		for (const key in form) {
			if (Object.hasOwnProperty.call(form, key)) {
				const element = form[key];
				if (element === false) {
					handleOpenError();
					return;
				}
				if (validate[key] === true) {
					handleOpenError();
					return;
				}
			}
		}

		handleOpenSucces(true);
	};

	const handleForm = (image, id, multiple) => {
		if (multiple) {
			setForm(values => ({ ...values, [id]: image }));
			return;
		}

		if (image === false) {
			setForm(values => ({ ...values, [id]: false }));
			return;
		}

		setForm(values => ({ ...values, [id]: image }));
	};

	const handleValidate = (value, regex, id) => {
		if (value === true) {
			setValidate(values => ({ ...values, [id]: value }));
			return;
		}

		setValidate(values => ({ ...values, [id]: value }));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.product_create}>
			<ErrorModal
				isOpen={isOpenError}
				handleClose={handleCloseError}
				message={'Rellene todos los campos'}
			/>
			<SuccesModal
				isOpen={isOpenSucces}
				handleClose={handleCloseSucces}
				message={'Se añadio el post con exito'}
			/>
			<ContainerInput>
				<fieldset className={styles.input_container}>
					<legend>
						<label htmlFor='name_product'>Nombre del Producto</label>
					</legend>
					<Input
						errorMessage={'El nombre del producto no puede ir vacio'}
						form={form}
						name={'name_product'}
						placeholder={'Nombre del producto'}
						regex={/^.{1,50}$/}
						setForm={setForm}
						setValidate={setValidate}
						type={'text'}
						validate={validate}
					/>
				</fieldset>
			</ContainerInput>
			<ContainerInput>
				<fieldset className={styles.input_container}>
					<legend>
						<label htmlFor='description_product'>
							Descripción del Producto
						</label>
					</legend>
					<SimpleTextArea
						errorMessage={
							'La descripción del producto debe de ser mayor a 20 caracteres'
						}
						form={form}
						name={'description_product'}
						placeholder={'Descripción del Producto'}
						regex={/^[\s\S]{20,}/}
						setForm={setForm}
						setValidate={setValidate}
						validate={validate}
					/>
				</fieldset>
			</ContainerInput>
			<ContainerInput>
				<fieldset className={styles.input_container}>
					<legend>
						<label htmlFor='category_product'>Categoria del Producto</label>
					</legend>
					<CategoriesSelect form={form} setForm={setForm} />
				</fieldset>
			</ContainerInput>
			<ContainerInput>
				<fieldset className={styles.input_container}>
					<legend>
						<label htmlFor='description_product'>Foto Principal</label>
					</legend>
					<File
						errorMessage={'La imagen principal es obligatoria'}
						form={form}
						handleForm={handleForm}
						handleValidate={handleValidate}
						id={'principal_image'}
						name={'principal_image'}
						variableForm={form.principal_image}
						variableValidate={validate.principal_image}
					/>
				</fieldset>
			</ContainerInput>
			<ContainerInput>
				<fieldset className={styles.input_container}>
					<legend>
						<label htmlFor='alter-images_product'>
							Fotos Adicionales del producto
						</label>
					</legend>
					<MultipleFiles
						errorMessage={'Se requiere al menos una imagen'}
						form={form}
						handleForm={handleForm}
						handleValidate={handleValidate}
						id={'alter-images_product'}
						name={'alter-images_product'}
						validate={validate}
					/>
				</fieldset>
			</ContainerInput>
			<div className={'mt-5 flex justify-center'}>
				<SimpleButton content={'Crear Producto'} isButton={false} />
			</div>
		</form>
	);
};

export default ProductForm;
