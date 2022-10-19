import { useContext, useEffect, useState } from 'react';
import BlogFormContext from '../../context/BlogFormContext';
import styles from './ArticleForm.module.scss';
import Select from '../Select/Select';
import { formatID } from '../../utils/formatId';
import MultipleSelect from '../Select/MultipleSelect';

const ArticleMetadata = () => {
	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);
	const { handleMetadata } = useContext(BlogFormContext);
	const [category, setCategory] = useState('-- Seleccione --');

	useEffect(() => {
		setCategories([
			{ id: 1, name: 'Categoria 1', color: '#ABC1' },
			{ id: 2, name: 'Categoria 2', color: '#ABC123' },
		]);
		setTags([
			{ id: 1, tag: 'Etiqueta 1' },
			{ id: 2, tag: 'Etiqueta 2' },
			{ id: 3, tag: 'Etiqueta 3' },
			{ id: 4, tag: 'Etiqueta 4' },
		]);

		const id = categories[0]?.id || 0;
		const name = categories[0]?.name || 'No hay categorias disponibles';
		const color = categories[0]?.color || '#000';

		handleMetadata(true, { id, name, color });
	}, []);

	const handleSelect = e => {
		const valueSelect = e.target.value;

		const value = categories.filter(
			element => formatID(element.name) === valueSelect
		)[0];

		const name = value.name;
		const color = value.color;
		const id = value.id;

		setCategory(name);

		handleMetadata(true, { id, name, color });
	};

	const handleCheckbox = data => {
		const array = [];
		data.forEach(element => {
			const values = tags.filter(obj => formatID(obj.tag) === element)[0];
			const id = values.id;
			const tag = values.tag;
			array.push({ id, tag });
		});

		handleMetadata(false, array);
	};

	return (
		<form className={styles.metadata}>
			<fieldset className={styles.metadata_fields}>
				<legend>Seleccionar Categoria</legend>
				<Select
					activeValue={category}
					name={'Categories'}
					onChange={handleSelect}
					values={categories.map(element => element.name)}
				/>
			</fieldset>

			<fieldset className={styles.metadata_fields}>
				<legend>Seleccionar Etiquetas</legend>
				<MultipleSelect
					values={tags.map(element => element.tag)}
					handleChange={handleCheckbox}
				/>
			</fieldset>
		</form>
	);
};

export default ArticleMetadata;
