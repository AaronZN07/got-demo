import logo from './../../assets/img/logo/Logo Negro.png';

const LogoSimple = ({ size = '200px' }) => {
	const Styles = {
		width: size,
	};

	return (
		<>
			<img
				src={logo}
				alt='Logo GOT Veterinaria'
				style={Styles}
				width={size}
				height={'65.7px'}
			/>
		</>
	);
};

export default LogoSimple;
