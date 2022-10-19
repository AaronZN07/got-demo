import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import './Swiper.scss';

const Swiper = ({
	children,
	quantity,
	paginations = true,
	arrow = true,
	dragable = true,
	autoplayable = false,
	setInterval = 3000,
	gapItems = 20,
	perMove = quantity,
}) => {
	return (
		<Splide
			aria-label='Testimoniales'
			options={{
				pagination: paginations,
				drag: dragable,
				arrows: arrow,
				autoplay: autoplayable,
				interval: setInterval,
				perPage: quantity || 2,
				perMove: perMove || 2,
				gap: gapItems,
				breakpoints: {
					1536: {
						perPage: quantity || 4,
						perMove: quantity || 4,
					},
					1280: {
						perPage: 2,
						perMove: 2,
					},
					768: {
						perPage: 1,
						perMove: 1,
						autoplay: true,
						interval: 3000,
					},
					350: {
						arrows: false,
						pagination: false,
					},
				},
				type: 'loop',
			}}
			hasTrack={false}
		>
			<div className='custom-wrapper'>
				<SplideTrack>
					{children.map((element, index) => (
						<SplideSlide key={index}>{element}</SplideSlide>
					))}
				</SplideTrack>
			</div>

			<div className='splide__arows'></div>
			<div className='splide__pagination'></div>
		</Splide>
	);
};

export default Swiper;
