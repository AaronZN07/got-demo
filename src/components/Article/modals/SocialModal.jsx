import {
	faFacebook,
	faTwitter,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../Modal/Modal';
import styles from './SocialModal.module.scss';

const SocialModal = ({ isOpen, handleClose }) => {
	const location = window.location.href;
	const text = 'Visita nuestro blog';
	const apiWhatsapp = 'https://api.whatsapp.com/send?text';
	const apiFacebook = 'https://www.facebook.com/sharer/sharer.php?u';
	const apiTwitter = 'https://www.twitter.com/share';

	const handleInput = e => e.target.select();
	const handleCopy = () => navigator.clipboard.writeText(location);

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<div className={styles.share_modal}>
				<h2>Comparte con tus amigos!</h2>

				<div className={styles.social_links}>
					<a
						target='_blank'
						rel='noreferrer'
						href={`${apiFacebook}=${location}`}
						className={styles.fb}
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href={`${apiWhatsapp}=${text} ${location}`}
						target={'_blank'}
						rel='noreferrer'
						className={styles.wp}
					>
						<FontAwesomeIcon icon={faWhatsapp} />
					</a>
					<a
						href={`${apiTwitter}?url=${location}&text=${text}`}
						target={'_blank'}
						rel='noreferrer'
						className={styles.tw}
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
				<span className='text-sm'>o copia el link</span>
				<div className={styles.copy}>
					<input type='text' defaultValue={location} onClick={handleInput} />
					<button
						onClick={handleCopy}
						data-for={'copy'}
						data-tip
						data-event={'click'}
					>
						<span>Copiar</span>
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default SocialModal;
