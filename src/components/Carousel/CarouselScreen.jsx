import UpButton from '../Buttons/UpButton';
import { Link } from 'react-router-dom';

import styles from './CarouselScreen.module.scss';

const CarouselScreen = ({ image, content }) => {
	return (
		<>
			<img src={image} alt='Imagen' className={styles['carousel-image']} />
			{content ? (
				<div
					className={`${styles['carousel-content']} ${styles['carousel-content-1']}`}
				>
					<div className='container mx-auto'>
						<div
							className={`${styles['carousel-content-info']} ${styles['carousel-content-info-1']}`}
						>
							<h1>
								GOT <span>Veterinaria</span>
							</h1>
							<h2>
								Cuidamos de <span>sus mascotas</span>
							</h2>
							<Link to={'/shop'}>
								<UpButton content='Ver Catálogo' />
							</Link>
							<Link to={'/about'}>
								<UpButton content='¿Quienes somos?' />
							</Link>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};
export default CarouselScreen;
