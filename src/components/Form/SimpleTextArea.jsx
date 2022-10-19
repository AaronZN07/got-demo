import { useEffect } from 'react';
import styles from './Form.module.scss';
import LabelError from './LabelError';

const SimpleTextArea = ({
	name,
	form,
	validate,
	setForm,
	setValidate,
	regex,
	errorMessage,
	placeholder,
}) => {
	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setForm(values => ({ ...values, [name]: value }));
	};

	const handleValidate = e => {
		const name = e.target.name;
		const value = e.target.value;

		if (regex) {
			regex.test(value)
				? setValidate(values => ({ ...values, [name]: false }))
				: setValidate(values => ({ ...values, [name]: true }));
		}
	};

	useEffect(() => {
		setValidate(values => ({ ...values, [name]: false }));
		if (!form.id) {
			setForm(values => ({ ...values, [name]: false }));
		}
	}, []);

	return (
		<>
			<textarea
				name={name}
				id={name}
				onChange={handleChange}
				onBlur={handleValidate}
				onKeyUp={handleValidate}
				placeholder={placeholder}
				className={validate[name] ? styles.input_error : undefined}
				value={form[name] || ''}
			/>
			{validate[name] && (
				<LabelError forComponent={name} content={errorMessage} />
			)}
		</>
	);
};

export default SimpleTextArea;
