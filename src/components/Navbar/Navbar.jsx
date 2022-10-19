import Navegation from './Navegation';
import NavegationResponsive from './NavegationResponsive';

import styles from './navbar.module.scss';
import { useEffect, useState, useRef } from 'react';

const Navbar = ({ referenceH }) => {
	const [isActive, setIsActive] = useState(false);
	const nav = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', e => {
			if (referenceH.current.getBoundingClientRect().bottom + 200 < 0) {
				document.body.style.paddingTop = `${nav.current.offsetHeight}px`;
				nav.current.classList.add(styles.sticky);
			} else {
				document.body.style.paddingTop = '0';
				nav.current.classList.remove(styles.sticky);
			}
		});

		return () => {
			document.body.style.paddingTop = '0';
			nav.current.classList.remove(styles.sticky);
		};
	}, []);

	return (
		<>
			<div className={`${styles.navBar}`} ref={nav}>
				<NavegationResponsive isActive={isActive} setIsActive={setIsActive} />
				<Navegation isActive={true} />
			</div>
		</>
	);
};

export default Navbar;
