import LogoSoloBlue from '../Logo/LogoSoloBlue';
import TitleSubCenter from '../Titles/TitleSubCenter';
import LoginForm from './LoginForm';

const LoginDesktop = () => {
	return (
		<div className='login_desktop'>
			<div className='login_header'>
				<LogoSoloBlue />
				<TitleSubCenter
					content={'Iniciar Sesión'}
					isHeader={true}
					subtitle={'Inicia sesión para consultar tu perfil'}
				/>
			</div>
			<div className='login_form'>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginDesktop;
