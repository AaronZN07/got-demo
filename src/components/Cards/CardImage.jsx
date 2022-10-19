import styles from './CardImage.module.scss';

const CardImage = ({ content, image, alt, title }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card_body}>
				<img src={image} alt={alt} className={styles.card_image} />
				<h5 className={styles.card_title}> {title} </h5>
				<p className={styles.card_content}> {content} </p>
				<div className={styles.card_footer}></div>
			</div>
		</div>
	);
};

export default CardImage;
