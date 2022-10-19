import { Link } from 'react-router-dom';
import UpButton from '../components/Buttons/UpButton';

const ErrroPage = () => {
	return (
		<div className='error_page'>
			<div className='error_text'>
				<h2>ooops!</h2>
				<h3>La página que estas buscando ya no exite o es desconocida</h3>
			</div>
			<Link to={'/'}>
				<UpButton content={'Volver al Inicio'} />
			</Link>
		</div>
	);
};

export default ErrroPage;
