import DefaultImage from '../../../assets/img/image.jpg';

const SectionTitleImage = ({ title, img, styles }) => {
	return (
		<section className={styles.base}>
			<div className={styles.title}>
				<h2> {title ? title : 'Sin título'} </h2>
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

export default SectionTitleImage;
