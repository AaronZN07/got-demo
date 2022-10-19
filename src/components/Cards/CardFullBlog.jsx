import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import FavoriteButton from '../Buttons/FavoriteButton';

import styles from './CardFullBlog.module.scss';
const CardFullBlog = ({ image, title, text, tags, link, linkTag, id }) => {
	return (
		<div className={styles.cardfull}>
			<Link to={link}>
				<div className={styles.card_image}>
					<img src={image} alt='Imagen Blog' />
					<span to={link}>Leer Más</span>
				</div>
			</Link>
			<div className={styles.card_body}>
				<div className={styles.body_header}>
					<div>
						<div className={styles['body_header-date']}>
							<span>JUN</span>
							<span>30</span>
						</div>
						<div className={styles['body_header-favs']}>
							<FavoriteButton content={50} id={id} />
						</div>
					</div>
					<div className={styles['body_header-share']}>
						<FontAwesomeIcon icon={faShareAlt} />
						<span>Compartir</span>
					</div>
				</div>
				<div className={styles.body_info}>
					<h3> {title} </h3>
					<p> {text} </p>
				</div>
				<div className={styles.footer}>
					<div className={styles.tags}>
						<FontAwesomeIcon icon={faTags} />
						{tags.map((element, index) => (
							<Link key={index} to={linkTag}>
								{element}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardFullBlog;
