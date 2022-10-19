import styles from './Select.module.scss';
import { formatID } from '../../utils/formatId';

const Option = ({ value, id, name, element, onChange }) => {
	id = formatID(id);

	return (
		<label htmlFor={id}>
			<div className={styles.option}>
				<input
					type='radio'
					className={styles.radio}
					id={id}
					value={value}
					name={name}
					onChange={onChange}
				/>
				{element}
			</div>
		</label>
	);
};

export default Option;
