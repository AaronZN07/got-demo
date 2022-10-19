import styles from './HeaderDashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ view, handleOpenSearch }) => {
	const handleSubmit = () => {
		alert('Enviando...');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className={styles.search}
				placeholder={`Buscar en ${view.actual}`}
			/>
			<button
				type='button'
				onClick={handleOpenSearch}
				className={styles.close_search}
			>
				<FontAwesomeIcon icon={faClose} />
			</button>
		</form>
	);
};

export default SearchForm;
