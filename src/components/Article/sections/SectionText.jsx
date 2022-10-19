import SlateEditorReadOnly from '../../SlateEditor/SlateEditorReadOnly';

const DEFAULT_VALUE =
	'[{"type":"paragraph","children":[{"text":"Sin Contenido en la sección","bold":true,"underline":true,"color":"#f50000"}]}]';

const SectionText = ({ styles, content }) => {
	return (
		<section className={styles.base}>
			<div className={styles.content}>
				<div>
					<SlateEditorReadOnly value={content ? content : DEFAULT_VALUE} />
				</div>
			</div>
		</section>
	);
};

export default SectionText;
