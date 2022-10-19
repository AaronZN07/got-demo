import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './Dropdown.module.scss';

const DropdownItem = ({ children, route, icon }) => {
	return (
		<NavLink to={route} className={styles.menu_item}>
			<FontAwesomeIcon icon={icon} />
			{children}
		</NavLink>
	);
};

export default DropdownItem;
