import { useState, useContext, useEffect } from 'react';
import BlogFormContext from '../../context/BlogFormContext';
import ArticleSection from './ArticleSection';
import StylesSelection from './StylesSelection';

const STYLE_LIST = {
	1: 'Titulo e Imagen',
	2: 'Titulo e imagen a la derecha',
	3: 'Titulo e imagen a la izquierda',
	4: 'Titulo, Imagen y Texto',
	5: 'Titulo, Texto e Imagen',
	6: 'Titulo, Texto e Imagen a la derecha',
	7: 'Titulo, Texto e Imagen a la izquierda',
	8: 'Título y texto',
	9: 'Imagen y Texto',
	10: 'Solo Imagen',
	11: 'Solo Contenido',
};

const ArticleSectionWrapper = ({
	label,
	name,
	isPrincipal = false,
	deleteSection,
	id,
}) => {
	const { form } = useContext(BlogFormContext);

	const [selectingStyle, setSelectingStyle] = useState(true);

	const [styleSection, setStyleSection] = useState(1);

	useEffect(() => {
		if (form[id]?.style) {
			setStyleSection(form[id]?.style);
		}
		if (id === 'Information' || form[id]?.style) {
			setSelectingStyle(false);
		}
	}, []);

	useEffect(() => {
		if (form.Principal?.style !== undefined) {
			setSelectingStyle(false);
			setStyleSection(form.Principal.style);
		}
	}, [form.Principal?.style]);

	return (
		<>
			{selectingStyle && (
				<StylesSelection
					setSelectingStyle={setSelectingStyle}
					setStyleSection={setStyleSection}
					STYLE_LIST={STYLE_LIST}
					deleteSection={deleteSection}
				/>
			)}
			{!selectingStyle && (
				<ArticleSection
					label={label}
					styleSelection={styleSection}
					name={name}
					isPrincipal={isPrincipal}
					deleteSection={deleteSection}
					id={id}
					setSelectingStyle={setSelectingStyle}
					STYLE_LIST={STYLE_LIST}
				/>
			)}
		</>
	);
};

export default ArticleSectionWrapper;
