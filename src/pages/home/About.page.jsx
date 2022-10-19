import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import AboutImage from '../../assets/img/gallery/about.jpg';
import TitleSubCenter from '../../components/Titles/TitleSubCenter';
import CardImage from '../../components/Cards/CardImage';
import bone from '../../assets/img/icons/bone.svg';
import TestimonialCard from '../../components/Cards/TestimonialCard';
import TitleSubLeftWhite from '../../components/Titles/TitleSubLeftWhite';
import Swiper from '../../components/Swiper/Swiper';
import CardOpen from '../../components/Cards/CardOpen';

import { faAward } from '@fortawesome/free-solid-svg-icons';
import CardPresentation from '../../components/Cards/CardPresentation';
import DefaultImage from '../../assets/img/image.jpg';

const About = () => {
	return (
		<main>
			<Breadcrumb page={'Sobre nosotros'} />
			<section className='about-header'>
				<div className='container mx-auto'>
					<span className='about-header_decoration'></span>
					<h3 className='about-header_text'>¿Quienes somos?</h3>
				</div>
			</section>

			<section className='about-us'>
				<div className='container mx-auto'>
					<img className='about-image' src={DefaultImage} alt='Banner Image' />
					<div className='about-us-info'>
						<h3 className='about-title'>Conócenos</h3>
						<p className='about-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
							consequatur quas deleniti, cupiditate ducimus impedit quis
							molestias est nisi facere commodi nemo distinctio vel aliquid
							odio. Ipsam voluptate eaque obcaecati.
						</p>
						<p className='about-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
							consequatur quas deleniti, cupiditate ducimus impedit quis
							molestias est nisi facere commodi nemo distinctio vel aliquid
							odio. Ipsam voluptate eaque obcaecati.
						</p>
					</div>
				</div>
			</section>

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

			<section className='why-choose-us'>
				<TitleSubCenter content={'¿Por qué elegirnos?'} />
				<div className='container mx-auto'>
					<CardOpen
						title={'Porque elegirnos'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing it amet it...'
						}
						icon={faAward}
					/>
					<CardOpen
						title={'Porque elegirnos'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing it amet it...'
						}
						icon={faAward}
					/>
					<CardOpen
						title={'Porque elegirnos'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing it amet it...'
						}
						icon={faAward}
					/>
					<CardOpen
						title={'Porque elegirnos'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing it amet it...'
						}
						icon={faAward}
					/>
				</div>
			</section>

			<section className='meet-team'>
				<TitleSubCenter content={'Conoce a nuestro equipo'} />
				<div className='container mx-auto'>
					<Swiper
						quantity={4}
						paginations={false}
						arrow={false}
						autoplayable={true}
					>
						<CardPresentation
							name={'Nombre'}
							occupation={'Veterinario'}
							bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							image={DefaultImage}
						/>
						<CardPresentation
							name={'Nombre'}
							occupation={'Veterinario'}
							bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							image={DefaultImage}
						/>
						<CardPresentation
							name={'Nombre'}
							occupation={'Veterinario'}
							bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							image={DefaultImage}
						/>
						<CardPresentation
							name={'Nombre'}
							occupation={'Veterinario'}
							bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							image={DefaultImage}
						/>
					</Swiper>
				</div>
			</section>
		</main>
	);
};

export default About;
