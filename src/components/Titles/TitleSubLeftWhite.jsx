import styles from './TitleSub.module.scss';

const TitleSubLeftWhite = ({ content, subtitle }) => {
	return (
		<>
			<h3 className={`${styles.title} ${styles.sub3}`}> {content} </h3>
			{subtitle ? <p className={styles.subtitle}> {subtitle} </p> : ''}
		</>
	);
};

export default TitleSubLeftWhite;
