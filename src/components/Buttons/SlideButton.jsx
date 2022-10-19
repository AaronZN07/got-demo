import styles from './SlideButton.module.scss';

const SlideButton = ({ content }) => {
	return (
		<span className={`${styles.slide_button} ${styles['learn-more']}`}>
			<span className={styles.circle} aria-hidden='true'>
				<span className={`${styles.icon} ${styles.arrow}`}></span>
			</span>
			<span className={styles['button-text']}>{content}</span>
		</span>
	);
};

export default SlideButton;
