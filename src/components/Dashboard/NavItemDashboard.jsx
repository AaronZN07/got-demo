import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavegationDashboard.module.scss';

const NavItemDashboard = ({
	route,
	icon,
	text,
	aditionalElement,
	secondIcon,
	collapse = false,
	exactly = true,
	itemsDropdown = [],
	colorIcon,
}) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);
	return (
		<>
			<li className={styles.navitem} onClick={handleOpen}>
				<NavLink
					end={exactly}
					to={route}
					className={({ isActive }) =>
						isActive ? `${styles.active}` : undefined
					}
				>
					<FontAwesomeIcon
						icon={icon}
						className={styles.icon}
						style={{ color: colorIcon }}
					/>
					<span className={styles.navitem_info}>
						<h3>{text}</h3>
						{aditionalElement ? aditionalElement : undefined}
						{secondIcon ? (
							<FontAwesomeIcon
								icon={secondIcon}
								className={open ? 'fa-rotate-90' : ''}
								style={{ color: colorIcon }}
							/>
						) : undefined}
					</span>
				</NavLink>
				<div className={styles.nav_collapse} onClick={e => e.stopPropagation()}>
					{collapse && open && (
						<ul>
							{itemsDropdown.map((element, index) => (
								<li key={index} className={styles.navitem}>
									<NavLink to={element.route}>
										<span className={styles.dropdown_icon}>
											<h3>{element.text.charAt(0)}</h3>
										</span>
										<div className={styles.navitem_info}>
											<span className={styles.dropdown_text}>
												<h3>{element.text}</h3>
											</span>
										</div>
									</NavLink>
								</li>
							))}
						</ul>
					)}
				</div>
			</li>
		</>
	);
};

export default NavItemDashboard;
