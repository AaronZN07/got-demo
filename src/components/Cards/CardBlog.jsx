import SlideButton from '../Buttons/SlideButton';
import styles from './CardBlog.module.scss';

import { Link } from 'react-router-dom';

const CardBlog = ({ image, title, text, tag, link, tagLink, lastUpdate }) => {
	return (
		<div className={styles.card}>
			<Link to={link}>
				<img src={image} className={styles['card-img-top']} alt={title} />
			</Link>
			<div className={styles.card_body}>
				<Link to={tagLink}>
					<span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
				</Link>
				<h5 className={`${styles['card-title']} mt-3`}> {title} </h5>
				<p className={styles['card-text']}>{text}</p>
				<Link to={link}>
					<SlideButton content={'Leer Más'} />
				</Link>
			</div>
			<div className={styles['card-footer']}>
				<small className={styles['text-muted']}>{lastUpdate}</small>
			</div>
		</div>
	);
};

export default CardBlog;
