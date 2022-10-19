import NavLinks from './NavLinks';
import styles from './navbar.module.scss';

const Navegation = isActive => {
	return (
		<nav className={styles.navegation}>
			<NavLinks active={isActive} />
		</nav>
	);
};

export default Navegation;
