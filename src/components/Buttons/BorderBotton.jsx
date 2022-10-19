import styles from './BorderBotton.module.scss';

const BorderBotton = ({ content, isBgWhite = false }) => {
	return (
		<span
			className={`${styles.border_botton} ${
				isBgWhite ? styles['border_botton-white'] : ''
			}`}
		>
			<span className={styles['top-key']}></span>
			<span className={styles.text}> {content} </span>
			<span className={styles['bottom-key-1']}></span>
			<span className={styles['bottom-key-2']}></span>
		</span>
	);
};

export default BorderBotton;
