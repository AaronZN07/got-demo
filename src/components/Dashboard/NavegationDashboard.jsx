import {
	faCartFlatbed,
	faHome,
	faInbox,
	faNewspaper,
	faUserGear,
	faBarsStaggered,
	faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import LogoSimple from '../Logo/LogoSimple';
import NavBarDashboard from './NavBarDashboard';
import styles from './NavegationDashboard.module.scss';
import NavItemDashboard from './NavItemDashboard';

const NavegationDashboard = ({ user, isOpen, setIsOpen }) => {
	const handleOpen = () => setIsOpen(!isOpen);

	return (
		<aside
			className={`${styles.admin_aside} ${
				isOpen ? styles.admin_open : styles.admin_close
			}`}
		>
			<div className={styles.aside_header}>
				<Link to={`/admin/${user}`} className={styles.aside_logo}>
					<LogoSimple />
				</Link>
				<div className={styles.aside_menu}>
					<button onClick={handleOpen}>
						<FontAwesomeIcon icon={faBarsStaggered} />
					</button>
				</div>
			</div>

			<NavBarDashboard>
				<NavItemDashboard
					route={`/admin/${user}`}
					icon={faHome}
					text={'Inicio'}
					colorIcon={'#96ADEC'}
				/>
				<NavItemDashboard
					route={`/admin/${user}/blog`}
					icon={faNewspaper}
					text={'Revista'}
					colorIcon={'#E2D281'}
				/>

				<NavItemDashboard
					route={`/admin/${user}/products`}
					icon={faCartFlatbed}
					text={'Productos'}
					colorIcon={'#65E9C5'}
				/>

				<NavItemDashboard
					route={`/admin/${user}/messages`}
					icon={faInbox}
					text={'Mensajes'}
					aditionalElement={<span className={styles.message_count}>0</span>}
					colorIcon={'#8765E9'}
				/>
				<NavItemDashboard
					route={`/admin/${user}/purchase-order`}
					icon={faMoneyBill}
					text={'Ordenes Compra'}
					aditionalElement={<span className={styles.message_count}>0</span>}
					colorIcon={'#b5f74b'}
				/>

				<NavItemDashboard
					route={`/admin/${user}/users`}
					icon={faUserGear}
					text={'Usuarios'}
					colorIcon={'#CF3A3A'}
				/>
			</NavBarDashboard>
		</aside>
	);
};

export default NavegationDashboard;
