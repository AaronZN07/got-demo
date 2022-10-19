// Components
import Navbar from '../../components/Navbar/Navbar';
import LogoSimple from '../../components/Logo/LogoSimple';
import ParagraphSpan from '../../components/Text/ParagraphSpan';
import LinkSocial from '../../components/Text/LinkSocial';
import ImageAndText from '../../components/Cards/ImageAndText';
import InputButton from '../../components/Buttons/InputButton';

// Dependecies
import { Link, Outlet } from 'react-router-dom';

// Icons
import {
	faFacebook,
	faInstagram,
	faWhatsapp,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Assets
import iconLocation from './../../assets/img/icons/location.png';
import iconPhone from './../../assets/img/icons/phone.png';
import iconTime from './../../assets/img/icons/time.png';
import iconCart from './../../assets/img/icons/shopping-cart.png';
import iconMap from './../../assets/img/icons/map.png';
import iconEmail from './../../assets/img/icons/email.png';
import { useRef } from 'react';

const HomeTemplate = () => {
	const reference = useRef(null);

	return (
		<>
			<div className='header' ref={reference}>
				<div className='header_social_mail'>
					<div className='header_colors'>
						<div className='bg-red-600 colors'></div>
						<div className='bg-green-600 colors'></div>
						<div className='bg-yellow-600 colors'></div>
					</div>

					<div className='header_social'>
						<div className='info_social-mail'>
							<p>
								Contactenos al correo:
								<a href='mailto:info@gotvet'>info@gotvet.com</a>
							</p>
						</div>
						<div className='info_social-icons'>
							<LinkSocial to='/' icon={faFacebook} />
							<LinkSocial to='/' icon={faWhatsapp} />
							<LinkSocial to='/' icon={faInstagram} />
							<LinkSocial to='/' icon={faTwitter} />
						</div>
					</div>
				</div>
				<div className='header_info'>
					<div className='header_info-logo'>
						<Link to='/'>
							<LogoSimple />
						</Link>
					</div>
					<div className='header_info-cards'>
						<ImageAndText icon={iconLocation} alt='Icono de Ubicación'>
							<ParagraphSpan p='Ubicación' span='Coronado' />
						</ImageAndText>

						<ImageAndText icon={iconPhone} alt='Icono de Teléfono'>
							<ParagraphSpan p='Teléfono' span='0000 - 0000' />
						</ImageAndText>

						<ImageAndText icon={iconTime} alt='Icono de Horario'>
							<ParagraphSpan p='Horario' span='8am - 5pm' />
						</ImageAndText>

						<Link to='/cart'>
							<ImageAndText icon={iconCart} alt='Icono de Carrito de Compras' />
						</Link>
					</div>
				</div>
			</div>
			<Navbar referenceH={reference} />
			{/* {children} */}
			<Outlet />
			<footer className='footer'>
				<div className='container mx-auto grid grid-cols-12'>
					<div className='footer_info'>
						<h3>Sobre Nosotros</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
							porro. Et quia cupiditate temporibus in vero! Aliquam error iste
							architecto autem, eveniet molestias quaerat harum nesciunt, libero
							corporis, id fugit.
						</p>
						<div className='info-cards'>
							<ImageAndText icon={iconMap} alt='Icono de Mapa'>
								<ParagraphSpan
									p='Coronado, San josé'
									span={
										<a
											target='_blank'
											rel='noreferrer'
											href='https://www.google.co.cr/maps/place/Veterinaria+GOT/@9.9719985,-84.0048312,18.5z/data=!4m5!3m4!1s0x8fa0e70b2f979c1f:0x7cdbf7566c46b419!8m2!3d9.9720946!4d-84.0044495?hl=es-419'
										>
											Ver En Mapa
										</a>
									}
								/>
							</ImageAndText>
							<ImageAndText icon={iconEmail} alt='Icono de Mapa'>
								<ParagraphSpan
									p='Correo Electrónico'
									span={<a href='mailto:info@gotvet.com'>info@gotvet.com</a>}
								/>
							</ImageAndText>
						</div>
					</div>
					<div className='footer_schedule'>
						<h3>Horario Laboral</h3>
						<ul>
							<li>
								Lunes <span>08:00 AM - 05:00 PM</span>
							</li>
							<li>
								Martes <span>08:00 AM - 05:00 PM</span>
							</li>
							<li>
								Miercoles <span>08:00 AM - 05:00 PM</span>
							</li>
							<li>
								Jueves <span>08:00 AM - 05:00 PM</span>
							</li>
							<li>
								Viernes <span>08:00 AM - 05:00 PM</span>
							</li>
							<li>
								Fin de Semana <span>Cerrado</span>
							</li>
							<li>
								Emergencias <span>Abierto</span>
							</li>
						</ul>
					</div>
					<div className='footer_subscribe'>
						<div className='subscribe-box'>
							<h3>Suscribete</h3>
							<p>
								Recibe un email para mantenerte actualizado con nuestras últimas
								noticias
							</p>
							<InputButton
								type='email'
								placeholder='info@gotvet.com'
								button='Suscribirse'
							/>
						</div>
						<div className='subscribe_social-icons'>
							<LinkSocial to='/' icon={faFacebook} />
							<LinkSocial to='/' icon={faWhatsapp} />
							<LinkSocial to='/' icon={faInstagram} />
							<LinkSocial to='/' icon={faTwitter} />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default HomeTemplate;
