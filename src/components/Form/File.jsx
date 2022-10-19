import { useEffect, useState, useRef } from 'react';
import styles from './Form.module.scss';
import LabelError from './LabelError';

const File = ({
	name,
	id,
	type = 'img',
	form,
	handleForm,
	handleValidate,
	errorMessage,
	variableForm,
	variableValidate,
}) => {
	const [file, setFile] = useState(null);
	const fileInput = useRef();
	const accept =
		type === 'img' ? 'image/*' : type === 'pdf' && '.doc, .pdf, .docx';

	const handleClick = () => fileInput.current.click();
	const handleChange = e => {
		const file = e.target.files[0];
		setFile(file);
	};

	const handleRemove = () => {
		if (file === null) handleForm(false, id, 'image');

		fileInput.current.value = null;
		setFile(null);
	};

	useEffect(() => {
		let fileReader;
		let isCancel = false;

		if (file) {
			fileReader = new FileReader();

			fileReader.onload = e => {
				const { result } = e.target;

				if (result && !isCancel) {
					handleForm(result, id, 'image');
					handleValidate(false, null, id, 'image');
				}
			};
			fileReader.readAsDataURL(file);
		} else {
			handleForm(false, id, 'image');
			handleValidate(false, null, id, 'image');
		}

		return () => {
			isCancel = true;
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort();
			}
		};
	}, [file]);

	return (
		<div className={styles.file}>
			<button
				className={styles.file_button}
				type={'button'}
				onClick={handleClick}
			>
				Añadir Archivo
			</button>

			<div
				className={`${styles.file_drag} ${
					file || variableForm ? 'hidden' : 'block'
				}`}
			>
				<input
					type={'file'}
					id={name}
					name={name}
					onChange={handleChange}
					accept={accept}
					ref={fileInput}
				/>
				<div>
					<h3>Arrastre y suelte un archivo o seleccione añadir archivo</h3>
				</div>
			</div>
			{variableForm && (
				<div className={styles.file_updated}>
					<img src={form[id]?.image || form[id]} alt='your image' />
					<div className={styles.file_text}>
						<button
							type='button'
							className={styles.file_remove}
							onClick={handleRemove}
						>
							Remover Archivo
						</button>
					</div>
				</div>
			)}
			{variableValidate && (
				<LabelError forComponent={name} content={errorMessage} />
			)}
		</div>
	);
};

export default File;
