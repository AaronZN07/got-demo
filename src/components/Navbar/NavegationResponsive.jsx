import NavLinks from './NavLinks';
import styles from './navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavegationResponsive = ({ isActive, setIsActive }) => {
	const handleToggle = () => setIsActive(!isActive);

	return (
		<nav className={`${styles.navegationResponsive}`}>
			<FontAwesomeIcon
				onClick={handleToggle}
				icon={faBars}
				size='3x'
				className={styles.icon}
			/>
			<NavLinks active={isActive} />
		</nav>
	);
};
export default NavegationResponsive;
