import styles from './CardOpen.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const CardOpen = ({ title, icon, content }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className={styles.card_open}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className={styles.header}>
				<div className={styles.img_box}>
					<FontAwesomeIcon
						icon={icon}
						size={'10x'}
						flip={hover ? true : false}
					/>
				</div>
				<h2 className={styles.title}> {title} </h2>
			</div>

			<div className={styles.content}>
				<p> {content} </p>
			</div>
		</div>
	);
};

export default CardOpen;
