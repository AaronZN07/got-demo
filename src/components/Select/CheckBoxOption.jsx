import styles from './CheckBoxOption.module.scss';
import { formatID } from '../../utils/formatId';
import { useRef } from 'react';

const CheckBoxOption = ({ name, onChange, value }) => {
	const id = formatID(name);
	const labelRef = useRef();

	return (
		<div
			className={styles.checkoption}
			onClick={() => labelRef.current.click()}
		>
			<div className={styles.checkbox}>
				<input
					type='checkbox'
					name={id}
					id={id}
					onChange={onChange}
					className={styles.hidden_check}
				/>
				<label
					htmlFor={id}
					ref={labelRef}
					onClick={() => labelRef.current.click()}
					className={styles.cbx_styled}
				/>
			</div>
			<span>{name}</span>
		</div>
	);
};

export default CheckBoxOption;
