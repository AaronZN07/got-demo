import { faCancel, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import BlogFormContext from '../../context/BlogFormContext';
import ContainerInput from '../Form/ContainerInput';
import File from '../Form/File';
import TextArea from '../Form/TextArea';
import styles from './ArticleForm.module.scss';
import ArticleInput from './ArticleInput';

const ArticleSection = ({
	label,
	styleSelection = 1,
	name,
	isPrincipal = false,
	deleteSection,
	id,
	setSelectingStyle,
	STYLE_LIST,
}) => {
	const {
		form,
		validate,
		handleChangeTextArea,
		handleValidate,
		setForm,
		handleNewSection,
		handleChange,
	} = useContext(BlogFormContext);

	const [title, setTitle] = useState(true);
	const [content, setContent] = useState(true);
	const [image, setImage] = useState(true);
	const [styleSection] = useState(parseInt(styleSelection), 10);

	useEffect(() => {
		if (styleSection === 1 || styleSection === 2 || styleSection === 3) {
			handleState(true, false, true);
			handleNewSection(id, styleSection, { title: false, image: false });
			return;
		}

		if (styleSection === 8) {
			handleState(true, true, false);
			handleNewSection(id, styleSection, { title: false, content: false });
			return;
		}
		if (styleSection === 9) {
			handleState(false, true, true);
			handleNewSection(id, styleSection, { content: false, image: false });
			return;
		}

		if (styleSection === 10) {
			handleState(false, false, true);
			handleNewSection(id, styleSection, { image: false });
			return;
		}

		if (styleSection === 11) {
			handleState(false, true, false);
			handleNewSection(id, styleSection, { content: false });
			return;
		}

		handleState(true, true, true);
		handleNewSection(id, styleSection);
	}, [styleSection]);

	const handleState = (title, content, image) => {
		setTitle(title);
		setContent(content);
		setImage(image);
	};

	return (
		<ContainerInput alterClass={styles.section_form}>
			<fieldset className={styles.section_content}>
				<legend className={styles.section_title}>
					<h3>
						{label} ({STYLE_LIST[styleSection]})
					</h3>
				</legend>
				{title && (
					<div className={styles['input_wrapper-section']}>
						<label htmlFor={`${name}-title`}> {`Título: ${label}`} </label>
						<ArticleInput
							name={`${name}-title`}
							errorMessage={'El título de la sección no puede ir vacio'}
							placeholder={'Titulo de Sección'}
							regex={/^.{1,50}$/}
							styles={styles}
							type={'text'}
							id={id}
						/>
					</div>
				)}
				{content && (
					<div className={styles['input_wrapper-section']}>
						<label htmlFor={`${name}-content`}> {`Contenido: ${label}`} </label>
						<TextArea
							errorMessage={'La sección debe de llevar almenos 20 caracteres'}
							form={form}
							name={`${name}-content`}
							placeholder={'Contenido de Sección'}
							regex={/^[\s\S]{20,}/}
							validate={validate}
							handleChangeTextArea={handleChangeTextArea}
							id={id}
							handleValidate={handleValidate}
						/>
					</div>
				)}
				{image && (
					<div className={styles['input_wrapper-section']}>
						<label htmlFor={`${name}-content`}> {`Imagen: ${label}`} </label>
						<File
							errorMessage={'La Imagen es obligatoria'}
							form={form}
							id={id}
							name={`${name}-image`}
							setForm={setForm}
							handleForm={handleChange}
							// validate={validate}
							variableForm={form[id]?.image}
							variableValidate={validate[id]?.image}
							handleValidate={handleValidate}
						/>
					</div>
				)}
				<div className={styles.buttons_wrapper}>
					{id !== 'Information' && (
						<button
							type={'button'}
							onClick={() => setSelectingStyle(true)}
							className={styles.button}
						>
							<FontAwesomeIcon icon={faObjectUngroup} />
							<span>Cambiar forma de sección</span>
						</button>
					)}
					{!isPrincipal && (
						<button
							type={'button'}
							className={styles.button}
							onClick={() => deleteSection(id)}
						>
							<FontAwesomeIcon icon={faCancel} />
							<span>Eliminar la sección</span>
						</button>
					)}
				</div>
			</fieldset>
		</ContainerInput>
	);
};

export default ArticleSection;
