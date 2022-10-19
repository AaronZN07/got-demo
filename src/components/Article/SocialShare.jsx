import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from '../../hooks/useModal';
import styles from './ArticleContent.module.scss';
import SocialModal from './modals/SocialModal';

const SocialShare = () => {
	const [isOpen, handleOpen, handleClose] = useModal(false);

	return (
		<div className={styles.article_share}>
			<button onClick={handleOpen}>
				<span className='font-bold'>Compartir</span>
				<FontAwesomeIcon icon={faShare} />
			</button>
			<SocialModal handleClose={handleClose} isOpen={isOpen} />
		</div>
	);
};

export default SocialShare;
