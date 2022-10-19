import DefaultImage from '../../../assets/img/image.jpg';

const SectionImage = ({ styles, img }) => {
	return (
		<section className={styles.base}>
			<div className={styles.image}>
				<img src={img ? img : DefaultImage} alt={'Imagen de Sección'} />
			</div>
		</section>
	);
};

export default SectionImage;
