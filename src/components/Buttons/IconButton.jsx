import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconButton.module.scss';

const IconButton = ({ text, icon, color }) => {
	return (
		<button className={`${styles.icon_button} ${styles[color]}`}>
			<div className={styles.icon}>
				<FontAwesomeIcon icon={icon} />
			</div>
			<div className={styles.text}>
				<p> {text} </p>
			</div>
		</button>
	);
};

export default IconButton;
