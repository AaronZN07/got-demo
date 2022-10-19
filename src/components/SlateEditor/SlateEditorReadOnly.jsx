import { useCallback, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import Element from './Element';
import Leaf from './Leaf';

const SlateEditorReadOnly = ({ value, styles }) => {
	const [editor] = useState(() => withReact(createEditor()));

	const renderElement = useCallback(props => <Element {...props} />, []);

	const renderLeaf = useCallback(props => <Leaf {...props} />, []);

	return (
		<Slate editor={editor} value={JSON.parse(value)} key={value}>
			<Editable
				readOnly
				placeholder='Contenido de sección'
				renderElement={renderElement}
				renderLeaf={renderLeaf}
				value={JSON.parse(value)}
			/>
		</Slate>
	);
};

export default SlateEditorReadOnly;
