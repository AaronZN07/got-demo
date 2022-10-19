import TitleSubCenter from '../../components/Titles/TitleSubCenter';
import TitleSubCenterWhite from '../../components/Titles/TitleSubCenterWhite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faLocationDot,
	faMessage,
	faCircle,
} from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../components/Contact/ContactForm';

const Contact = () => {
	return (
		<main>
			<section className='contact-info'>
				<TitleSubCenterWhite content={'Mantente en Contacto'} />
				<div className='container mx-auto'>
					<div className='info-container addres'>
						<span className='fa-layers fa-fw fa-lg'>
							<FontAwesomeIcon icon={faCircle} className='fa-back' />
							<FontAwesomeIcon icon={faLocationDot} transform='shrink-6' />
						</span>
						<h2>Direccion</h2>
						<p>
							<span>Costa Rica, San José, Coronado</span>
							500m Este del cementerio de Coronado San José Vázquez de Coronado,
							11101
						</p>
					</div>
					<div className='info-container phones'>
						<span className='fa-layers fa-fw fa-lg'>
							<FontAwesomeIcon icon={faCircle} className='fa-back' />
							<FontAwesomeIcon icon={faPhone} transform='shrink-6' />
						</span>
						<h2>Telefono</h2>
						<p>
							<span>(+506) 0000 - 0000</span>
						</p>
					</div>
					<div className='info-container email'>
						<span className='fa-layers fa-fw fa-lg'>
							<FontAwesomeIcon icon={faCircle} className='fa-back' />
							<FontAwesomeIcon icon={faMessage} transform='shrink-6' />
						</span>
						<h2>Email</h2>
						<a href='mailto:info@gotvet.com'>
							<p>
								<span>info@veterinariagot.com</span>
							</p>
						</a>
					</div>
				</div>
			</section>
			<section className='contact-form'>
				<TitleSubCenter content={'Formulario de Contacto'} />
				<div className='container mx-auto'>
					<ContactForm />
				</div>
			</section>
		</main>
	);
};

export default Contact;
