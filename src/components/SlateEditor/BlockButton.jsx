import { useSlate } from 'slate-react';
import { toggleBlock, isBlockActive } from './EditorFunctions';
import styles from './SlateEditor.module.scss';

const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const BlockButton = ({ icon, format }) => {
	const editor = useSlate();

	const handleClick = e => {
		e.preventDefault();
		toggleBlock(editor, format);
	};

	return (
		<button
			type={'button'}
			onClick={handleClick}
			className={`${
				isBlockActive(
					editor,
					format,
					TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
				)
					? styles.block_active
					: styles.block_inactive
			}
					${styles.toolbar_item}`}
		>
			<img src={icon} alt={'Icono'} />
		</button>
	);
};

export default BlockButton;
