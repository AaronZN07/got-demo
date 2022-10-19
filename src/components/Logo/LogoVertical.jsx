import logo from './../../assets/img/logo/Logo Vertical Azul oscuro.png';

const LogoVertical = () => {
	const Styles = {
		width: '200px',
	};

	return (
		<>
			<img src={logo} alt='Logo GOT Veterinaria' style={Styles} />
		</>
	);
};

export default LogoVertical;
