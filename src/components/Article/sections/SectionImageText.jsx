import DefaultImage from '../../../assets/img/image.jpg';
import SlateEditorReadOnly from '../../SlateEditor/SlateEditorReadOnly';

const DEFAULT_VALUE =
	'[{"type":"paragraph","children":[{"text":"Sin Contenido en la sección","bold":true,"underline":true,"color":"#f50000"}]}]';

const SectionImageText = ({ styles, img, content }) => {
	return (
		<section className={styles.base}>
			<div className={styles.image}>
				<img src={img ? img : DefaultImage} alt={'Imagen de Sección'} />
			</div>
			<div className={styles.content}>
				<div>
					<SlateEditorReadOnly value={content ? content : DEFAULT_VALUE} />
				</div>
			</div>
		</section>
	);
};

export default SectionImageText;
