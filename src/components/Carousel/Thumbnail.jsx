import styles from './Thumbnail.module.scss';

const Thumbnail = ({ images, handleSlide, active }) => {
	return (
		<div className={styles.thumbnail}>
			{images.map((element, index) => (
				<div
					key={index}
					className={`${styles.thumbnail_image} ${
						active === index ? styles['thumbnail_image-active'] : ''
					}`}
					onClick={() => handleSlide(index)}
				>
					<img src={element} alt='Thumbnail Image' id={`thumbnail-${index}`} />
				</div>
			))}
		</div>
	);
};

export default Thumbnail;
