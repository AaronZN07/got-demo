import { faExclamation, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './MessageCard.module.scss';

const MessageCard = ({ data }) => {
	const [active, setActive] = useState(false);
	const tel = `${data.tel.slice(0, 4)}-${data.tel.slice(4, 8)}`;
	return (
		<div className={styles.message_card}>
			<div className={styles.card_header} onClick={() => setActive(!active)}>
				<div className={styles.card_id}>
					<span> #{data.id} </span>
				</div>
				<div className={styles.card_info}>
					<p>
						Nombre:
						<span> {data.name} </span>
					</p>
					<p>
						Correo:
						<span> {data.email} </span>
					</p>
					<p>
						Número de Teléfono:
						<span> {tel} </span>
					</p>
				</div>
				<div className={styles.open}>
					<FontAwesomeIcon
						icon={faAngleDown}
						className={active ? 'fa-rotate-180' : undefined}
					/>
				</div>
			</div>
			<div
				className={`${styles.card_body} ${active && styles['card_body-open']}`}
			>
				<h3>{data.subject}</h3>
				<p>{data.message}</p>
			</div>
			{!data.read && (
				<div className={styles.unread}>
					<FontAwesomeIcon icon={faExclamation} />
				</div>
			)}
		</div>
	);
};

export default MessageCard;
