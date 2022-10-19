import { CompactPicker } from 'react-color';

const Color = ({ form, setForm, name }) => {
	const handleColor = color => {
		setForm(values => ({ ...values, [name]: color.hex }));
	};

	return (
		<CompactPicker
			color={form[name] || '#fff'}
			onChange={handleColor}
			onChangeComplete={handleColor}
		/>
	);
};

export default Color;
