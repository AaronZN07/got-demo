import { useRef, useContext } from 'react';
import BlogFormContext from '../../context/BlogFormContext';
import SimpleButton from '../Buttons/SimpleButton';
import styles from './ArticleForm.module.scss';
import ArticleSectionWrapper from './ArticleSectionWrapper';
import { useModal } from '../../hooks/useModal';
import ErrorModal from '../Modal/ErrorModal';
import SuccesModal from '../Modal/SuccessModal';

const ArticleForm = () => {
	const [isOpenError, handleOpenError, handleCloseError] = useModal(false);
	const [isOpenSucces, handleOpenSucces, handleCloseSucces] = useModal(false);
	const { handleRemove, section, setSection, form, validate } =
		useContext(BlogFormContext);
	const formRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		if (!form.Principal) {
			handleOpenError();
			return;
		}

		if (form.Information.title === false || form.Information.image === false) {
			handleOpenError();
			return;
		}

		if (
			validate.Information.title === true ||
			validate.Information.image === true
		) {
			handleOpenError();
			return;
		}

		for (const key in form.Principal) {
			if (Object.hasOwnProperty.call(form.Principal, key)) {
				const element = form.Principal[key];
				if (key === 'style' || key === 'id') continue;
				if (element === false) {
					handleOpenError();
					return;
				}
				if (validate.Principal[key] === true) {
					handleOpenError();
					return;
				}
			}
		}

		for (const key in section) {
			if (Object.hasOwnProperty.call(section, key)) {
				const id = section[key].id;
				for (const key in form[id]) {
					if (Object.hasOwnProperty.call(form[id], key)) {
						if (key === 'style' || key === 'id') continue;
						const element = form[id][key];
						if (element === false) {
							handleOpenError();
							return;
						}
						if (validate[id][key] === true) {
							handleOpenError();
							return;
						}
					}
				}
			}
		}

		handleOpenSucces();
	};

	const handleSection = () => {
		const lastItem = section.findLast(element => element) || 0;
		const id = lastItem === 0 ? lastItem + 1 : lastItem.id + 1;

		const newSection = `Sección Número ${id}`;
		const newSectionName = `secondary${id}_section`;

		setSection(value => [
			...value,
			{ title: newSection, name: newSectionName, id },
		]);
	};

	const deleteSection = id => {
		setSection(values => values.filter(obj => obj.id !== id));
		handleRemove(id);
	};

	return (
		<form onSubmit={handleSubmit} className={styles.article_form} ref={formRef}>
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
			{/* Informacón Principal */}
			<ArticleSectionWrapper
				label={'Informacion de Titulo'}
				isPrincipal
				name={'title_section'}
				id={'Information'}
			/>

			{/* Sección Principal */}
			<ArticleSectionWrapper
				label={'Sección Principal'}
				name={'primary_section'}
				id={'Principal'}
				isPrincipal
			/>

			{/* Secciónes Adicionales */}
			{section.map(element => (
				<ArticleSectionWrapper
					key={element.id}
					label={`${element.title}`}
					name={`${element.name}`}
					deleteSection={deleteSection}
					section={section}
					id={element.id}
				/>
			))}
			<div className='mx-auto'>
				<SimpleButton
					content={'Crear sección nueva'}
					isButton={true}
					onClick={handleSection}
				/>
			</div>

			<SimpleButton content={'Crear Post'} isButton={false} />
		</form>
	);
};

export default ArticleForm;
