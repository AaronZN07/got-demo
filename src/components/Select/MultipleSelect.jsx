import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CheckBoxOption from './CheckBoxOption';
import selectCore from './Select.module.scss';
import { formatID } from '../../utils/formatId';

const MultipleSelect = ({ values, handleChange }) => {
	const [selected, setSelected] = useState([]);
	const [active, setActive] = useState(false);

	const onChange = e => {
		let array = [];
		const id = e.target.id;
		const value = e.target.checked;
		if (value) {
			array = [...selected, id];
			setSelected(values => [...values, id]);
		} else {
			array = selected.filter(element => element !== id);
			setSelected(selected.filter(element => element !== id));
		}

		handleChange(array);
	};

	return (
		<div className={selectCore.select_box}>
			<div className={selectCore.selected} onClick={() => setActive(!active)}>
				<div>
					<div className={selectCore.collection_selected}>
						{selected.length !== 0 ? (
							selected.map((element, index) => (
								<span key={index} className={selectCore.item_selected}>
									{values.filter(value => formatID(value) === element)}
								</span>
							))
						) : (
							<p>No hay datos seleccionados</p>
						)}
					</div>
				</div>
				<span className={selectCore.icon}>
					<FontAwesomeIcon
						icon={faCaretDown}
						className={active ? 'fa-rotate-180' : undefined}
					/>
				</span>
			</div>
			<div
				className={`${selectCore.option_container} ${
					active && selectCore.active
				}`}
			>
				{values.map(element => (
					<CheckBoxOption name={element} onChange={onChange} key={element} />
				))}
			</div>
		</div>
	);
};

export default MultipleSelect;
