import { useState, useEffect } from 'react';
import Select from '../Select/Select';
import { unFormatID } from '../../utils/formatId';

const CategoriesSelect = ({ form, setForm }) => {
	const [categories, setCategories] = useState([]);
	const [selected, setSelected] = useState(categories[1]);

	useEffect(() => {
		setCategories([
			{ id: '1', name: 'Correas' },
			{ id: '2', name: 'Comida' },
			{ id: '3', name: 'Medicamento' },
			{ id: '4', name: 'Correas' },
			{ id: '5', name: 'Comida' },
			{ id: '6', name: 'Medicamento' },
		]);
		setSelected(categories[1]);
	}, []);

	const handleChange = e => {
		const value = categories.filter(
			element => unFormatID(element.name) === e.target.value
		)[0];

		setSelected(value);
		setForm(values => ({ ...values, category_product: value.id }));
	};

	useEffect(() => {
		if (!form.category_product) {
			setForm(values => ({ ...values, category_product: false }));
		}
	}, []);

	return (
		<Select
			activeValue={selected?.name || '-- Seleccionar --'}
			name={'category_product'}
			onChange={handleChange}
			values={categories.map(element => element.name)}
		/>
	);
};

export default CategoriesSelect;
