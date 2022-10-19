import styles from './TitleSub.module.scss';

const TitleSubCenterWhite = ({ content, subtitle }) => {
	return (
		<>
			<h3 className={`${styles.title} ${styles.sub2}`}> {content} </h3>
			{subtitle ? <p className={styles.subtitle}> {subtitle} </p> : ''}
		</>
	);
};

export default TitleSubCenterWhite;
