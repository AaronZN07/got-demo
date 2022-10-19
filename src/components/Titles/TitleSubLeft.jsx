import styles from './TitleSub.module.scss';

const TitleSubLeft = ({ content, subtitle, isHeader = false }) => {
	return (
		<>
			{isHeader ? (
				<h1 className={`${styles.title} ${styles.sub4}`}> {content} </h1>
			) : (
				<h3 className={`${styles.title} ${styles.sub4}`}> {content} </h3>
			)}
			{subtitle ? (
				<p className={`${styles.subtitle} ${styles.subtitle_1}`}>{subtitle}</p>
			) : (
				''
			)}
		</>
	);
};

export default TitleSubLeft;
