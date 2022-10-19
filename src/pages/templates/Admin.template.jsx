import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import HeaderDashboard from '../../components/Dashboard/HeaderDashboard';
import NavegationDashboard from '../../components/Dashboard/NavegationDashboard';
import { ViewProvider } from '../../context/ViewsContext';

const AdminTemplate = () => {
	const { user } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		document.body.classList.add('admin_page');
		window.addEventListener('resize', handleResize);

		return () => {
			document.body.classList.remove('admin_page');
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = e => {
		const condition = e.target.innerWidth <= 1024;
		setWidth(condition);
	};

	return (
		<ViewProvider>
			<NavegationDashboard user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
			<main
				className={`admin_content ${isOpen ? 'admin_open' : 'admin_close'}`}
			>
				<HeaderDashboard user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className='admin_outlet'>
					<Outlet />
				</div>

				{width && isOpen && (
					<div
						className='admin_backdrop'
						onClick={() => setIsOpen(false)}
					></div>
				)}
			</main>
		</ViewProvider>
	);
};

export default AdminTemplate;
