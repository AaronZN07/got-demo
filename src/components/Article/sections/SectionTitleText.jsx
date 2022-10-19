import SlateEditorReadOnly from '../../SlateEditor/SlateEditorReadOnly';

const DEFAULT_VALUE =
	'[{"type":"paragraph","children":[{"text":"Sin Contenido en la sección","bold":true,"underline":true,"color":"#f50000"}]}]';

const SectionTitleText = ({ styles, title, content }) => {
	return (
		<section className={styles.base}>
			<div className={styles.title}>
				<h2> {title ? title : 'Sin título'} </h2>
			</div>
			<div className={styles.content}>
				<div>
					<SlateEditorReadOnly value={content ? content : DEFAULT_VALUE} />
				</div>
			</div>
		</section>
	);
};

export default SectionTitleText;
