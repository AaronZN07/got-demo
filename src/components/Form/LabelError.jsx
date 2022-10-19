import styles from './Form.module.scss';

const LabelError = ({ forComponent, content }) => {
	return (
		<label htmlFor={forComponent} className={styles.label_error}>
			{content}
		</label>
	);
};

export default LabelError;
