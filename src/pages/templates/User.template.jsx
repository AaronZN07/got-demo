import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LogoSimpleWhite from '../../components/Logo/LogoSimpleWhite';

const UserTemplate = () => {
	useEffect(() => {
		document.body.classList.add('client_template');

		return () => {
			document.body.classList.remove('client_template');
		};
	}, []);

	return (
		<>
			<header className='client_header'>
				<Link to={'/'}>
					<LogoSimpleWhite />
				</Link>
				<div className='client_nav'>
					<ul>
						<li>
							<Link to={'/'}>Inicio</Link>
						</li>
						<li>
							<Link to={'/about'}>Sobre Nosotros</Link>
						</li>
						<li>
							<Link to={'services'}>Servicios</Link>
						</li>
						<li>
							<Link to={'/blog'}>Blog</Link>
						</li>
						<li>
							<Link to={'/shop'}>Tienda</Link>
						</li>
						<li>
							<Link to={'/contact'}>Contacto</Link>
						</li>
					</ul>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default UserTemplate;
