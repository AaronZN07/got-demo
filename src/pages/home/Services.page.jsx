import Banner from '../../components/Banners/Banner';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Services from '../../components/Services_/Services';
import TitleSubCenter from '../../components/Titles/TitleSubCenter';

import DefaultImage from '../../assets/img/image.jpg';
import CardProduct from '../../components/Cards/CardProduct';
import CardPrice from '../../components/Cards/CardPrice';

const ServicesPage = () => {
	const data = {
		image: DefaultImage,
		title: 'Titulo',
		description: 'Descripcion del producto.',
		link: '/shop/producto',
		price: '00.0',
	};

	return (
		<main>
			<Breadcrumb page={'Servicios'} />
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

			<section className='plans'>
				<TitleSubCenter
					content={'Planes'}
					subtitle={'Te ofrecemos los siguientes planes'}
				/>
				<div className='container mx-auto'>
					<CardPrice
						price={'1000'}
						level={'Basico'}
						beneficts={[
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
						]}
						color={'red'}
					/>
					<CardPrice
						price={'1000'}
						level={'Basico'}
						beneficts={[
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
						]}
						color={'green'}
					/>
					<CardPrice
						price={'1000'}
						level={'Basico'}
						beneficts={[
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
						]}
						color={'blue'}
					/>
					<CardPrice
						price={'1000'}
						level={'Basico'}
						beneficts={[
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
							'Beneficio',
						]}
						color={'yellow'}
					/>
				</div>
			</section>
		</main>
	);
};

export default ServicesPage;
