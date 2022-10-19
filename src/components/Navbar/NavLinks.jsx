import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';

const NavLinks = ({ active }) => {
	return (
		<div className={`${active ? styles.show : styles.hide}`}>
			<ul>
				<li>
					<NavLink
						end
						to='/'
						className={({ isActive }) =>
							isActive ? styles.isActive : undefined
						}
					>
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink
						end
						to='/about'
						className={({ isActive }) =>
							isActive ? styles.isActive : undefined
						}
					>
						Sobre Nosotros
					</NavLink>
				</li>
				<li>
					<NavLink
						end
						to='/services'
						className={({ isActive }) =>
							isActive ? styles.isActive : undefined
						}
					>
						Servicios
					</NavLink>
				</li>
				<li>
					<NavLink
						end
						to='/blog'
						className={({ isActive }) =>
							isActive ? styles.isActive : undefined
						}
					>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink
						end
						to='/shop'
						className={({ isActive }) =>
							isActive ? styles.isActive : undefined
						}
					>
						Tienda
					</NavLink>
				</li>
				<li>
					<NavLink
						end
						to='/contact'
						className={({ isActive }) =>
							isActive ? styles.isActive : undefined
						}
					>
						Contacto
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default NavLinks;
