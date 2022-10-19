import styles from './upButton.module.scss';

const UpButton = ({ content }) => {
	return <button className={styles.upButton}> {content} </button>;
};

export default UpButton;
