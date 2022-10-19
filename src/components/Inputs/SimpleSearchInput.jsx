import styles from './SimpleSearchInput.module.scss';

const SimpleSearchInput = ({ placeholder }) => {
	return (
		<input
			className={styles.search_input}
			type='search'
			required
			placeholder={placeholder}
			id='search'
		/>
	);
};

export default SimpleSearchInput;
