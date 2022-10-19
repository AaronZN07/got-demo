import { useEffect } from 'react';
import LabelError from './LabelError';
import styles from './Form.module.scss';

const Input = ({
	placeholder,
	name,
	id = name,
	type,
	regex,
	errorMessage,
	form,
	setForm,
	validate,
	setValidate,
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
			<input
				type={type}
				id={id}
				name={name}
				value={form[name] || ''}
				onChange={handleChange}
				placeholder={placeholder}
				onKeyUp={handleValidate}
				onBlur={handleValidate}
				className={validate[name] ? styles.input_error : undefined}
			/>
			{validate[name] && (
				<LabelError forComponent={name} content={errorMessage} />
			)}
		</>
	);
};

export default Input;
