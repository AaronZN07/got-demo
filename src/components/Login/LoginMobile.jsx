import { Link } from 'react-router-dom';
import LogoSoloWhite from '../Logo/LogoSoloWhite';
import TitleSubCenterWhite from '../Titles/TitleSubCenterWhite';
import LoginForm from './LoginForm';

const LoginMobile = () => {
	return (
		<div className='login_mobile'>
			<div className='login_header'>
				<LogoSoloWhite />
				<TitleSubCenterWhite
					content={'Iniciar Sesión'}
					isHeader={true}
					subtitle={'Inicia sesión para consultar tu perfil'}
				/>
			</div>
			<div className='login_form'>
				<LoginForm />
			</div>
			<div className={'login_back'}>
				<Link to={'/'}>Ir al Inicio</Link>
			</div>
		</div>
	);
};

export default LoginMobile;
