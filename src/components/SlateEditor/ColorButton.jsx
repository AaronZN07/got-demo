import { useSlate } from 'slate-react';
import { toggleMark } from './EditorFunctions';
import styles from './SlateEditor.module.scss';

const ColorButton = ({ format, icon, id }) => {
	const editor = useSlate();

	const handleChange = e => {
		toggleMark(editor, format, true, e.target.value);
	};

	return (
		<div className={`${styles.color_button} ${styles.toolbar_item}`}>
			<label htmlFor={id}>
				<img src={icon} alt={'Icono'} />
			</label>
			<input id={id} type='color' onChange={handleChange} />
		</div>
	);
};

export default ColorButton;
