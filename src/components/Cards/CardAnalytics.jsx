import styles from './CardAnalytics.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';

const CardAnalytics = ({
	title,
	stadistic,
	pallete,
	darkPallete,
	icon,
	percentage = true,
}) => {
	const card = useRef();

	useEffect(() => {
		if (card.current) {
			card.current.style.setProperty('--color', pallete);
			card.current.style.setProperty('--darkenColor', darkPallete);
		}
	}, []);

	return (
		<div className={styles.card_analytics} ref={card}>
			<div className={styles.card_header}>
				<div className={styles.header_icon}>
					<FontAwesomeIcon icon={icon} />
				</div>

				<div className={styles.header_stats}>
					<h3>{title} </h3>
					<span className={styles.body_count}>{stadistic}</span>
				</div>
			</div>
			<hr className={styles.divition} />
			{percentage && (
				<div className={styles.card_footer}>
					<p>
						<span>{stadistic}%</span> más que la semana pasada
					</p>
				</div>
			)}
		</div>
	);
};

export default CardAnalytics;
