import logo from './../../assets/img/logo/Logo Blanco.png';

const LogoSimpleWhite = () => {
	const Styles = {
		width: '200px',
	};

	return (
		<>
			<img src={logo} alt='Logo GOT Veterinaria' style={Styles} />
		</>
	);
};

export default LogoSimpleWhite;
