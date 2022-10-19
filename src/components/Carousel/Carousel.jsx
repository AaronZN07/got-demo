import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import { useRef, useState } from 'react';

import CarouselScreen from './CarouselScreen';
import Thumbnail from './Thumbnail';

const Carousel = ({ images, options, content = false, thumbnail = false }) => {
	const [active, setActive] = useState(0);
	const carousel = useRef();

	const handleSlide = id => {
		if (carousel.current) {
			carousel.current.go(id);
		}
	};

	const handleMove = () => {
		if (carousel.current) {
			setActive(carousel.current.splide.index);
		}
	};

	return (
		<>
			<Splide
				aria-label='Carousel de Presentación'
				options={options}
				tag='section'
				style={{ padding: 0 }}
				ref={carousel}
				onMove={handleMove}
			>
				{images.map((element, index) => (
					<SplideSlide key={index}>
						<CarouselScreen image={element} content={content} />
					</SplideSlide>
				))}
			</Splide>
			{thumbnail && (
				<Thumbnail images={images} handleSlide={handleSlide} active={active} />
			)}
		</>
	);
};

export default Carousel;
