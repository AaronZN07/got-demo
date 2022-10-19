import styles from './ImageAndText.module.scss';

const ImageAndText = ({ icon, children = '', alt }) => {
	return (
		<div className={styles.infoCard}>
			<img src={icon} alt={alt} />
			{children}
		</div>
	);
};

export default ImageAndText;
