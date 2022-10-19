import { useRef, useState, useEffect } from 'react';
import styles from './Form.module.scss';
import LabelError from './LabelError';

const MultipleFiles = ({
	name,
	id,
	type = 'img',
	form,
	handleForm,
	handleValidate,
	validate,
	errorMessage,
}) => {
	const [selectedImage, setSelectedImage] = useState([]);
	const fileInput = useRef();
	const accept =
		type === 'img' ? 'image/*' : type === 'pdf' && '.doc, .pdf, .docx';

	const handleClick = () => fileInput.current.click();

	const handleChange = e => {
		const files = e.target.files;
		const filesArray = Array.from(files);

		const imagesArray = filesArray.map(element => URL.createObjectURL(element));
		setSelectedImage(previousImages => previousImages.concat(imagesArray));
	};

	useEffect(() => {
		handleForm(selectedImage.length === 0 ? false : selectedImage, id, true);

		if (selectedImage === false || selectedImage.length < 1) {
			handleValidate(true, null, id, 'image');
		} else {
			handleValidate(false, null, id, 'image');
		}
	}, [selectedImage]);

	const handleRemove = image => {
		if (selectedImage.length < 1) {
			setSelectedImage(false);
		}

		setSelectedImage(selectedImage.filter(element => element !== image));
	};

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
					form[id]?.image || form[id] ? 'hidden' : 'block'
				}`}
			>
				<input
					type={'file'}
					id={name}
					name={name}
					onChange={handleChange}
					accept={accept}
					ref={fileInput}
					multiple
				/>
				<div>
					<h3>Arrastre y suelte un archivo o seleccione añadir archivo</h3>
				</div>
			</div>
			<div className='flex flex-wrap justify-center gap-5'>
				{form[id]?.image ||
					(form[id] &&
						form[id].map((element, index) => (
							<div className={styles.file_updated} key={index}>
								<img src={element} alt='Imagen subida' />
								<div className={styles.file_text}>
									<button
										type='button'
										className={styles.file_remove}
										onClick={() => handleRemove(element)}
									>
										Remover Archivo
									</button>
								</div>
							</div>
						)))}
			</div>
			{validate[id]?.image ||
				(validate[id] && (
					<LabelError forComponent={name} content={errorMessage} />
				))}
		</div>
	);
};

export default MultipleFiles;
