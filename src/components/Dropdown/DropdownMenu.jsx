import styles from './Dropdown.module.scss';
const DropdownMenu = ({ children }) => {
	return <div className={styles.dropdown}>{children}</div>;
};

export default DropdownMenu;
