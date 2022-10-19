import { useSlate } from 'slate-react';
import { toggleMark, isMarkActive } from './EditorFunctions';
import styles from './SlateEditor.module.scss';

const MarkButton = ({ icon, format }) => {
	const editor = useSlate();

	const handleClick = e => {
		e.preventDefault();
		toggleMark(editor, format);
	};

	return (
		<button
			type={'button'}
			onClick={handleClick}
			className={`${
				isMarkActive(editor, format) ? styles.mark_active : styles.mark_inactive
			} ${styles.toolbar_item}`}
		>
			<img src={icon} alt={'Icono'} />
		</button>
	);
};

export default MarkButton;
