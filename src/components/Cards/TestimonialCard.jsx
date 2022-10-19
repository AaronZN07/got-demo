import styles from './TestimonialCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ name, description, occupation }) => {
	return (
		<figure className={styles.card}>
			<figcaption>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={faQuoteRight} size={'2xl'} />
				</div>
				<blockquote>
					<p>{description}</p>
				</blockquote>
				<h3>{name}</h3>
				<h4> {occupation} </h4>
			</figcaption>
		</figure>
	);
};

export default TestimonialCard;
