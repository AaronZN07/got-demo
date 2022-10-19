import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';

import styles from './Services.module.scss';

const ServiceTab = ({ service, active, setActive, index }) => {
	const handleActive = () => {
		setActive(index);
	};

	return (
		<button
			onClick={handleActive}
			className={`${styles.tab} ${active ? styles.active : ''}`}
		>
			<FontAwesomeIcon icon={faBone} size={'2x'} />
			<span>{service}</span>
		</button>
	);
};

export default ServiceTab;
