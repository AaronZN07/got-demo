import styles from './CardPrice.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble as iconCheck } from '@fortawesome/free-solid-svg-icons';

const CardPrice = ({ beneficts, color, price, level }) => {
	return (
		<div className={`${styles.card_plan} ${styles[color]}`}>
			<div className={styles.card_plan_header}>
				<div className={styles['card_plan-level']}>
					<p> {level} </p>
				</div>
				<div className={styles['card_plan-price']}>
					<h2> {price} </h2>
				</div>
			</div>
			<div className={styles.card_plan_body}>
				{beneficts.map((element, index) => (
					<p key={index}>
						<FontAwesomeIcon icon={iconCheck} /> {element}
					</p>
				))}
				<button className={styles['card_plan-contact']}>Contactar</button>
			</div>
		</div>
	);
};

export default CardPrice;
