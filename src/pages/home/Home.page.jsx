import { Link } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import TitleSubCenter from '../../components/Titles/TitleSubCenter';
import TitleSubCenterWhite from '../../components/Titles/TitleSubCenterWhite';
import CardImage from '../../components/Cards/CardImage';
import UpButton from '../../components/Buttons/UpButton';
import Services from '../../components/Services_/Services';
import Banner from '../../components/Banners/Banner';
import CardProduct from '../../components/Cards/CardProduct';
import Swiper from '../../components/Swiper/Swiper';
import TestimonialCard from '../../components/Cards/TestimonialCard';

import ImageCarousel1 from '../../assets/img/gallery/dog.jpg';
import ImageCarousel2 from '../../assets/img/gallery/cat.jpg';
import ImageCarousel3 from '../../assets/img/gallery/rabbit.jpg';
import DefaultImage from '../../assets/img/image.jpg';

import bone from '../../assets/img/icons/bone.svg';
import TitleSubLeftWhite from '../../components/Titles/TitleSubLeftWhite';
import CardBlog from '../../components/Cards/CardBlog';
import timeSince from '../../utils/timeSince';
const Home = () => {
	const data = {
		image: DefaultImage,
		title: 'Titulo',
		description: 'Descripcion del producto.',
		link: '/shop/producto',
		price: '00.0',
	};

	return (
		<main>
			<Carousel
				images={[ImageCarousel1, ImageCarousel2, ImageCarousel3]}
				options={{
					type: 'loop',
					arrows: false,
					pagination: false,
					drag: false,
					pauseOnHover: false,
					autoplay: true,
					interval: 3000,
				}}
				content={true}
			/>

			<section className='wwd'>
				<TitleSubCenter
					content='¿Qué hacemos?'
					subtitle='Conoce un poco de nuestro trabajo'
				/>
				<div className='container mx-auto'>
					<CardImage
						title='¿Qué hacemos?'
						image={bone}
						content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi expedita fugit fuga numquam quos, earum sequi, odio corrupti quo molestiae assumenda? Nam unde, amet hic id veniam quo voluptates?'
					/>
					<CardImage
						title='¿Qué hacemos?'
						image={bone}
						content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi expedita fugit fuga numquam quos, earum sequi, odio corrupti quo molestiae assumenda? Nam unde, amet hic id veniam quo voluptates?'
					/>
					<CardImage
						title='¿Qué hacemos?'
						image={bone}
						content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi expedita fugit fuga numquam quos, earum sequi, odio corrupti quo molestiae assumenda? Nam unde, amet hic id veniam quo voluptates?'
					/>
					<Link to='/about'>
						<UpButton content='Leer Más' />
					</Link>
				</div>
			</section>

			<section className='get_appointment'>
				<TitleSubCenterWhite
					content='Agenda una cita'
					subtitle='Llena el formulario y nos pondremos en contacto contigo lo más pronto posible'
				/>
				<Link to='/contact'>
					<UpButton content='Llenar formulario' />
				</Link>
			</section>

			<section className='services'>
				<TitleSubCenter
					content='Servicios'
					subtitle='Conoce los servicios que tenemos para ofrecerte'
				/>
				<div className='container mx-auto'>
					<Services
						tabs={['Servicio 1', 'Servicio 2', 'Servicio 3', 'Servicio 4']}
					>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
							aliquid qui distinctio dolor necessitatibus nisi culpa facere
							quaerat neque impedit, debitis voluptatum nemo, consequatur
							aliquam amet? Ipsum maiores totam accusantium? Servicio 1
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
							aliquid qui distinctio dolor necessitatibus nisi culpa facere
							quaerat neque impedit, debitis voluptatum nemo, consequatur
							aliquam amet? Ipsum maiores totam accusantium? Servicio 2
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
							aliquid qui distinctio dolor necessitatibus nisi culpa facere
							quaerat neque impedit, debitis voluptatum nemo, consequatur
							aliquam amet? Ipsum maiores totam accusantium? Servicio 3
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
							aliquid qui distinctio dolor necessitatibus nisi culpa facere
							quaerat neque impedit, debitis voluptatum nemo, consequatur
							aliquam amet? Ipsum maiores totam accusantium? Servicio 4
						</p>
					</Services>
				</div>
				<Link to='/services'>
					<UpButton content='Leer más' />
				</Link>
			</section>

			<Banner
				title='Mira nuestra tienda'
				subtitle='¿Buscas algo? Mira lo que tenemos para ofrecerte'
				to='Ir a Tienda'
				link='/shop'
			/>

			<section className='presentation-products'>
				<div className='container mx-auto'>
					<CardProduct data={data} />
					<CardProduct data={data} />
					<CardProduct data={data} />
					<CardProduct data={data} />
				</div>
			</section>

			<section className='testimonials'>
				<div className='container mx-auto'>
					<TitleSubLeftWhite
						content={'¿Qué opinan nuestros clientes?'}
						subtitle={''}
					/>
					<Swiper quantity={2}>
						<TestimonialCard
							name={'Cliente 1'}
							occupation={'Cliente'}
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
						enim et amet dolorem expedita quo impedit iure magni eaque corrupti
						nihil voluptatibus, dolorum laboriosam natus illum, obcaecati unde
						omnis!'
						/>

						<TestimonialCard
							name={'Cliente 2'}
							occupation={'Cliente'}
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
						enim et amet dolorem expedita quo impedit iure magni eaque corrupti
						nihil voluptatibus, dolorum laboriosam natus illum, obcaecati unde
						omnis!'
						/>

						<TestimonialCard
							name={'Cliente 3'}
							occupation={'Cliente'}
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
						enim et amet dolorem expedita quo impedit iure magni eaque corrupti
						nihil voluptatibus, dolorum laboriosam natus illum, obcaecati unde
						omnis!'
						/>

						<TestimonialCard
							name={'Cliente 4'}
							occupation={'Cliente'}
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
						enim et amet dolorem expedita quo impedit iure magni eaque corrupti
						nihil voluptatibus, dolorum laboriosam natus illum, obcaecati unde
						omnis!'
						/>

						<TestimonialCard
							name={'Cliente 5'}
							occupation={'Cliente'}
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
						enim et amet dolorem expedita quo impedit iure magni eaque corrupti
						nihil voluptatibus, dolorum laboriosam natus illum, obcaecati unde
						omnis!'
						/>

						<TestimonialCard
							name={'Cliente 6'}
							occupation={'Cliente'}
							description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
						enim et amet dolorem expedita quo impedit iure magni eaque corrupti
						nihil voluptatibus, dolorum laboriosam natus illum, obcaecati unde
						omnis!'
						/>
					</Swiper>
				</div>
			</section>

			<section className='recent_news'>
				<TitleSubCenter
					content={'Blog'}
					subtitle={'Descubre nuestras últimas noticias en nuestro blog'}
				/>

				<div className='container mx-auto'>
					<CardBlog
						image={DefaultImage}
						lastUpdate={timeSince(new Date('01/03/2022'))}
						link={'/blog/blog1'}
						tag={'Etiqueta'}
						tagLink={'/blog'}
						text={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisuscipit eveniet voluptatum est quidem'
						}
						title={'Titulo'}
					/>
					<CardBlog
						image={DefaultImage}
						lastUpdate={timeSince(new Date('01/03/2022'))}
						link={'/blog/blog1'}
						tag={'Etiqueta'}
						tagLink={'/blog'}
						text={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisuscipit eveniet voluptatum est quidem'
						}
						title={'Titulo'}
					/>
					<CardBlog
						image={DefaultImage}
						lastUpdate={timeSince(new Date('01/03/2022'))}
						link={'/blog'}
						tag={'Etiqueta'}
						tagLink={'/blog/blog1'}
						text={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisuscipit eveniet voluptatum est quidem'
						}
						title={'Titulo'}
					/>
				</div>
			</section>
		</main>
	);
};

export default Home;
