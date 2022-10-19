import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CardIconAndText.module.scss';

const CardIconAndText = ({ icon, text, color }) => {
	return (
		<div className={`${styles.card_icon_text} ${styles[`${color}`]}`}>
			<span className={styles.icon}>
				<FontAwesomeIcon icon={icon} />
			</span>
			<h4> {text} </h4>
		</div>
	);
};

export default CardIconAndText;
