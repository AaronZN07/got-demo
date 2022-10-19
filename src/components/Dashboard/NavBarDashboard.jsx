import styles from './NavegationDashboard.module.scss';

const NavBarDashboard = ({ children }) => {
	return (
		<nav className={styles.aside_nav}>
			<ul>{children}</ul>
		</nav>
	);
};

export default NavBarDashboard;
