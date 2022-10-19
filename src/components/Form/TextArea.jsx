import LabelError from './LabelError';
import SlateEditor from '../SlateEditor/SlateEditor';
import styles from './Form.module.scss';

const TextArea = ({
	placeholder,
	name,
	id,
	errorMessage,
	form,
	handleChangeTextArea,
	validate,
	handleValidate,
	regex = /^[\s\S]{20,}/,
}) => {
	return (
		<>
			<SlateEditor
				form={form}
				id={id}
				name={name}
				placeholder={placeholder}
				handleChangeTextArea={handleChangeTextArea}
				handleValidate={handleValidate}
				regex={regex}
				aditionalClass={validate[id]?.content && styles.input_error}
			/>
			{validate[id]?.content && (
				<LabelError forComponent={name} content={errorMessage} />
			)}
		</>
	);
};

export default TextArea;
