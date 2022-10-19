import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import TitleSubLeft from '../../components/Titles/TitleSubLeft';
import BlogContent from '../../components/Blog/BlogContent';
import BlogAside from '../../components/Blog/BlogAside';

const BlogPage = () => {
	return (
		<main>
			<Breadcrumb page={'Blog'} />
			<section className='blog'>
				<TitleSubLeft
					content={'Últimas Noticias'}
					subtitle={'Mantente atento a todas nuestras noticias'}
				/>
				<div className='blog_content'>
					<BlogContent />
					<BlogAside />
				</div>
			</section>
		</main>
	);
};

export default BlogPage;
