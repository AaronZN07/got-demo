import SlateEditorReadOnly from '../../SlateEditor/SlateEditorReadOnly';
import DefaultImage from '../../../assets/img/image.jpg';

const DEFAULT_VALUE =
	'[{"type":"paragraph","children":[{"text":"Sin Contenido en la sección","bold":true,"underline":true,"color":"#f50000"}]}]';

const SectionFull = ({ title, content, img, styles }) => {
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
			<div className={styles.image}>
				<img
					src={img ? img : DefaultImage}
					alt={title ? title : 'Imagen de sección en blog'}
				/>
			</div>
		</section>
	);
};

export default SectionFull;
