import logo from './../../assets/img/logo/Imagotipo Azul Oscuro.png';

const LogoSoloBlue = () => {
	const Styles = {
		width: '64px',
	};

	return (
		<>
			<img src={logo} alt='Logo GOT Veterinaria' style={Styles} />
		</>
	);
};

export default LogoSoloBlue;
