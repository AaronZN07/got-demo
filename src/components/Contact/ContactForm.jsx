import { useState } from 'react';
import styles from './ContactForm.module.scss';
import ContainerInput from '../Form/ContainerInput';
import Input from '../Form/Input';
import SimpleTextArea from '../Form/SimpleTextArea';

const ContactForm = () => {
	const [form, setForm] = useState({});
	const [validate, setValidate] = useState({});

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form_contact}>
			<ContainerInput alterClass={styles.name}>
				<Input
					errorMessage={'El nombre debe de llevar solo letras y espacios'}
					form={form}
					setForm={setForm}
					id={'name_form'}
					name={'name_form'}
					placeholder={'Nombre Completo'}
					regex={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
					type={'text'}
					validate={validate}
					setValidate={setValidate}
				/>
			</ContainerInput>

			<ContainerInput alterClass={styles.tel}>
				<Input
					errorMessage={'El número debe de llevar sólo 8 digitos y números'}
					form={form}
					setForm={setForm}
					id={'tel_form'}
					name={'tel_form'}
					placeholder={'Número de Teléfono'}
					regex={/^\d{8}$/}
					type={'tel'}
					validate={validate}
					setValidate={setValidate}
				/>
			</ContainerInput>

			<ContainerInput alterClass={styles.email}>
				<Input
					errorMessage={'Formato de correo: example@example.com'}
					form={form}
					setForm={setForm}
					id={'email_form'}
					name={'email_form'}
					placeholder={'Correo Electrónico'}
					regex={
						/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
					}
					type={'email'}
					validate={validate}
					setValidate={setValidate}
				/>
			</ContainerInput>

			<ContainerInput alterClass={styles.subject}>
				<Input
					errorMessage={
						'El asunto del mensaje debe de tener mínimo 10 caracteres y máximo 40 caracteres'
					}
					form={form}
					setForm={setForm}
					id={'subject_form'}
					name={'subject_form'}
					placeholder={'Asunto del mensaje'}
					regex={/^[\s\S]{10,40}$/}
					type={'text'}
					validate={validate}
					setValidate={setValidate}
				/>
			</ContainerInput>

			<ContainerInput alterClass={styles.message}>
				<SimpleTextArea
					errorMessage={
						'El mensaje debe de llevar como mínimo 30 caracteres y máximo 150 caracteres'
					}
					form={form}
					setForm={setForm}
					name={'message_form'}
					placeholder={'Cuerpo del mensaje'}
					regex={/^[\s\S]{30,150}/}
					validate={validate}
					setValidate={setValidate}
				/>
			</ContainerInput>

			<input
				type='submit'
				value={'Enviar Formulario'}
				className={styles.submit}
			/>
		</form>
	);
};

export default ContactForm;
