import { useEffect, useState } from 'react';
import LoginDesktop from '../../components/Login/LoginDesktop';
import LoginMobile from '../../components/Login/LoginMobile';

const Login = () => {
	const [width, setWidth] = useState(window.innerWidth <= 767);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = e => {
		const condition = e.target.innerWidth <= 767;
		setWidth(condition);
	};

	return (
		<div className='login_container'>
			{width ? <LoginMobile /> : <LoginDesktop />}
		</div>
	);
};

export default Login;
