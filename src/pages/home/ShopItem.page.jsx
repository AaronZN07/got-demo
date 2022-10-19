import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useParams } from 'react-router-dom';
import TitleSubLeft from '../../components/Titles/TitleSubLeft';
import TitleSubCenter from '../../components/Titles/TitleSubCenter';
import Carousel from '../../components/Carousel/Carousel';
import CardProduct from '../../components/Cards/CardProduct';

import ImageCarousel1 from '../../assets/img/gallery/dog.jpg';
import ImageCarousel2 from '../../assets/img/gallery/cat.jpg';
import ImageCarousel3 from '../../assets/img/gallery/rabbit.jpg';
import FavoriteButton from '../../components/Buttons/FavoriteButton';
import SimpleButton from '../../components/Buttons/SimpleButton';
import CounterInput from '../../components/Inputs/CounterInput';
import LinkSocial from '../../components/Text/LinkSocial';
import {
	faFacebook,
	faWhatsapp,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Swiper from '../../components/Swiper/Swiper';
import DefaultImage from '../../assets/img/image.jpg';
import { useState } from 'react';

const ShopItem = () => {
	const { product } = useParams();
	const [count, setCount] = useState(1);

	const data = {
		image: DefaultImage,
		title: 'Titulo',
		description: 'Descripcion del producto.',
		link: '/shop/producto',
		price: '00.0',
	};

	return (
		<main>
			<Breadcrumb
				page={'Detalle de Producto'}
				pagesBefore={[{ page: 'Tienda', link: '/shop' }]}
			/>
			<section className='product'>
				<TitleSubLeft content={product} />
				<div className='product_detail'>
					<div className='product_carousel'>
						<Carousel
							images={[ImageCarousel1, ImageCarousel2, ImageCarousel3]}
							options={{
								type: 'loop',
								arrows: false,
								pagination: true,
								drag: true,
								pauseOnHover: false,
								autoplay: true,
								interval: 3000,
							}}
							thumbnail={true}
						/>
					</div>
					<div className='product_info'>
						<div className='info_info'>
							<h2>Descripción:</h2>
							<h3>50,000</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
								dolore fugit animi possimus vitae dicta nulla ut error eius.
								Placeat molestias repellendus iste atque ex unde possimus earum,
								magnam rerum?
							</p>
						</div>
						<FavoriteButton content={'Añadir a Favoritos'} />
						<div className='info_actions'>
							<SimpleButton isButton={true} content='Añadir al Carrito' />
							<CounterInput count={count} setCount={setCount} />
						</div>
						<div className='info_share'>
							<h3 className='uppercase font-normal'>Compartir</h3>
							<div className='info_share-icons'>
								<LinkSocial to={'/'} icon={faFacebook} />
								<LinkSocial to={'/'} icon={faInstagram} />
								<LinkSocial to={'/'} icon={faTwitter} />
								<LinkSocial to={'/'} icon={faWhatsapp} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='product_similar'>
				<TitleSubCenter content={'Productos Similares'} />
				<div className='container mx-auto'>
					<Swiper quantity={4} paginations={false} perMove={1}>
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
					</Swiper>
				</div>
			</section>
		</main>
	);
};

export default ShopItem;
