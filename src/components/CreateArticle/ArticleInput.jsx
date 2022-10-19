import BlogFormContext from '../../context/BlogFormContext';
import { useContext } from 'react';
import LabelError from '../Form/LabelError';

const ArticleInput = ({
	type,
	name,
	id,
	placeholder,
	errorMessage,
	styles,
	regex,
}) => {
	const { form, validate, handleChange, handleValidate } =
		useContext(BlogFormContext);

	return (
		<>
			<input
				type={type}
				id={name}
				name={name}
				value={form[id]?.title || ''}
				onChange={e => handleChange(e, id, 'title')}
				placeholder={placeholder}
				onKeyUp={e => handleValidate(e, regex, id, 'title')}
				onBlur={e => handleValidate(e, regex, id, 'title')}
				className={validate[id]?.title ? styles.input_error : undefined}
			/>
			{validate[id]?.title && (
				<LabelError forComponent={name} content={errorMessage} />
			)}
		</>
	);
};

export default ArticleInput;
