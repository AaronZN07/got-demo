import { useSlate } from 'slate-react';
import { insertLink, isBlockActive, removeLink } from './EditorFunctions';
import styles from './SlateEditor.module.scss';

const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const LinkButton = ({ icon }) => {
	const editor = useSlate();

	const handleClick = e => {
		e.preventDefault();
		if (
			isBlockActive(
				editor,
				'link',
				TEXT_ALIGN_TYPES.includes('link') ? 'align' : 'type'
			)
		) {
			removeLink(editor);
			return;
		}

		const href = prompt('Ingrese la dirección');
		insertLink(editor, href);
	};

	return (
		<button
			type={'button'}
			onClick={handleClick}
			className={`${
				isBlockActive(
					editor,
					'link',
					TEXT_ALIGN_TYPES.includes('link') ? 'align' : 'type'
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

export default LinkButton;
