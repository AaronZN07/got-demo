import styles from './CardPresentation.module.scss';

const CardPresentation = ({ name, occupation, bio, image }) => {
	const bgImage = {
		background: `url(${image})`,
	};
	return (
		<div className={`${styles.card_presentation} card`} style={bgImage}>
			<div className={styles.card_presentation_info}>
				<p className={`${styles.title}`}>{name} </p>
				<p className={`${styles.subtitle}`}> {occupation} </p>
			</div>
			<div className={styles.card_presentation_bio}>
				<p className={`${styles.text}`}>{bio}</p>
			</div>
		</div>
	);
};

export default CardPresentation;
