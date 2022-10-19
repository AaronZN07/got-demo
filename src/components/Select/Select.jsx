import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Option from './Option';
import styles from './Select.module.scss';
import { formatID } from '../../utils/formatId';

const Select = ({ values = [], onChange, activeValue, name }) => {
	const [active, setActive] = useState(false);

	const handleClick = e => {
		onChange(e);
		setActive(false);
	};

	return (
		/* Selected Box */
		<div className={styles.select_box}>
			{/* Selected item */}
			<div className={styles.selected} onClick={() => setActive(!active)}>
				<span>{activeValue}</span>
				<span className={styles.icon}>
					<FontAwesomeIcon
						icon={faCaretDown}
						className={active ? 'fa-rotate-180' : undefined}
					/>
				</span>
			</div>
			{/* Selected Options */}
			<div className={`${styles.option_container} ${active && styles.active}`}>
				{values.map((element, index) => (
					<Option
						id={element}
						name={name}
						key={index}
						value={formatID(element)}
						element={element}
						onChange={handleClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Select;
