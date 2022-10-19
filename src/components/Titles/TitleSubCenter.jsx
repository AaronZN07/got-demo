import styles from './TitleSub.module.scss';

const TitleSubCenter = ({ content, subtitle, isHeader = false }) => {
	return (
		<>
			{isHeader ? (
				<h1 className={`${styles.title} ${styles.sub1}`}> {content} </h1>
			) : (
				<h3 className={`${styles.title} ${styles.sub1}`}> {content} </h3>
			)}
			{subtitle ? (
				<p className={`${styles.subtitle} ${styles.subtitle}`}>{subtitle}</p>
			) : (
				''
			)}
		</>
	);
};

export default TitleSubCenter;
