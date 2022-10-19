import { Transforms, Editor, Element, Range } from 'slate';

const LIST_TYPES = ['ol', 'ul']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

// Block Activo
const isBlockActive = (editor, format, blockType = 'type') => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) &&
                Element.isElement(n) &&
                n[blockType] === format,
        })
    )

    return !!match
}

const toggleBlock = (editor, format) => {
    // Está activo
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
    )
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            Element.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    })
    let newProperties;
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        }
    } else {
        newProperties = {
            type: isActive ? 'paragraph' : isList ? 'li' : format,
        }
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

// Mark Activo 
const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const toggleMark = (editor, format, hasColor = false, color, link = false, href) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        if (hasColor) {
            Editor.addMark(editor, format, color)
            return;
        }

        if (link) {
            Editor.addMark(editor, format, href)
            return;
        }

        Editor.addMark(editor, format, true)
    }
}

// Link
const createLinkNode = (href, text) => (
    {
        type: 'link',
        href,
        children: [{ text }]
    }
)

const insertLink = (editor, url) => {
    if (!url) return;

    const { selection } = editor;
    const link = createLinkNode(url, 'Link');
    if (selection) {
        const [parent] = Editor.parent(editor, selection.focus.path);

        if (parent.type === 'link') {
            removeLink(editor);
            return;
        }

        if (Range.isCollapsed(selection)) {
            Transforms.insertNodes(editor, link, { select: true });
        }
        else {
            Transforms.wrapNodes(editor, link,
                { split: true }
            )

        }
    }
    else {
        Transforms.insertNodes(editor, { type: 'paragraph', children: [link] })
    }
};

const removeLink = (editor) => {
    Transforms.unwrapNodes(editor, {
        match: n => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link'
    })
};

const deserialize = string => {
    // Return a value array of children derived by splitting the string.
    return string.split('\n').map(line => {
        return {
            children: [{ text: line }],
        };
    });
};

export { isBlockActive, toggleBlock, isMarkActive, toggleMark, removeLink, insertLink, deserialize };