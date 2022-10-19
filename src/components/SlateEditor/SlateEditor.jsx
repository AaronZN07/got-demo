import { useCallback, useState, useMemo } from 'react';
import { createEditor, Node } from 'slate';
import { Slate, withReact, Editable } from 'slate-react';
import Element from './Element';
import Leaf from './Leaf';
import MarkButton from './MarkButton';
import BlockButton from './BlockButton';
import { toggleMark } from './EditorFunctions';
import isHotkey from 'is-hotkey';
import ColorButton from './ColorButton';
import BlockButtons from './BlockButtons';
import styles from './SlateEditor.module.scss';
import header1 from './icons/h1.svg';
import header2 from './icons/h2.svg';
import header3 from './icons/h3.svg';
import bold from './icons/bold.svg';
import font from './icons/font_color.svg';
import bucket from './icons/bucket.svg';
import strikethrough from './icons/strikethrough.svg';
import underline from './icons/underline.svg';
import superscript from './icons/superscript.svg';
import subscript from './icons/subscript.svg';
import alignLeft from './icons/align_left.svg';
import alignCenter from './icons/align_center.svg';
import alignRight from './icons/align_right.svg';
import alignJustify from './icons/align_justify.svg';
import ol from './icons/ol_list.svg';
import ul from './icons/ul_list.svg';

const HOTKEYS = {
	'mod+b': 'bold',
	'mod+i': 'italic',
	'mod+u': 'underline',
	'mod+s': 'strikethrough',
	'mod+.': 'code',
};

const SlateEditor = ({
	id,
	form,
	name,
	handleChangeTextArea,
	placeholder,
	handleValidate,
	regex = '',
	aditionalClass,
}) => {
	const content = form[id]?.content ? JSON.parse(form[id]?.content) : undefined;

	const initialValue = useMemo(
		() =>
			content || [
				{
					type: 'paragraph',
					children: [{ text: '' }],
				},
			]
	);

	const [editor] = useState(() => withReact(createEditor()));

	const renderElement = useCallback(props => <Element {...props} />, []);

	const renderLeaf = useCallback(props => <Leaf {...props} />, []);

	const handleHotKey = e => {
		for (const hotkey in HOTKEYS) {
			if (isHotkey(hotkey, e)) {
				e.preventDefault();
				toggleMark(editor, HOTKEYS[hotkey]);
			}
		}
	};

	const serialize = value => {
		return (
			value
				// Return the string content of each paragraph in the value's children.
				.map(n => Node.string(n))
				// Join them all with line breaks denoting paragraphs.
				.join('\n')
		);
	};

	const handleChange = value => {
		handleChangeTextArea(value, editor, id);
		handleValidate(serialize(value), regex, id, 'content');
	};

	return (
		<div
			style={{ backgroundColor: '#fff' }}
			className={`${styles.editor} ${aditionalClass && aditionalClass}`}
		>
			<Slate
				editor={editor}
				value={initialValue}
				onChange={value => handleChange(value)}
			>
				<div className={styles.toolbar}>
					<BlockButtons>
						<MarkButton format={'bold'} icon={bold} />
						<MarkButton format={'strikethrough'} icon={strikethrough} />
						<MarkButton format={'underline'} icon={underline} />
						<MarkButton format={'superscript'} icon={superscript} />
						<MarkButton format={'subscript'} icon={subscript} />
					</BlockButtons>

					<BlockButtons>
						<ColorButton
							format={'color'}
							icon={font}
							id={`${name}-font_color`}
						/>
						<ColorButton
							format={'bgColor'}
							icon={bucket}
							id={`${name}-bg_color`}
						/>
					</BlockButtons>

					<BlockButtons>
						<BlockButton format={'h1'} icon={header1} />
						<BlockButton format={'h2'} icon={header2} />
						<BlockButton format={'h3'} icon={header3} />
					</BlockButtons>

					<BlockButtons>
						<BlockButton format={'left'} icon={alignLeft} />
						<BlockButton format={'center'} icon={alignCenter} />
						<BlockButton format={'right'} icon={alignRight} />
						<BlockButton format={'justify'} icon={alignJustify} />
					</BlockButtons>

					<BlockButtons>
						<BlockButton format={'ol'} icon={ol} />
						<BlockButton format={'ul'} icon={ul} />
					</BlockButtons>
				</div>
				<Editable
					name={name}
					id={name}
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					onKeyDown={handleHotKey}
					placeholder={placeholder}
					className={styles.editor_text}
					value={form[id]?.name}
				/>
			</Slate>
		</div>
	);
};

export default SlateEditor;
