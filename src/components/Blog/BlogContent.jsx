import styles from './BlogContent.module.scss';
import DefaultImage from '../../assets/img/image.jpg';
import CardFullBlog from '../Cards/CardFullBlog';
import Pagination from '../Pagination/Pagination';

const BlogContent = () => {
	return (
		<div className={styles.blog_content}>
			<CardFullBlog
				image={DefaultImage}
				link={'/blog/blog1'}
				linkTag={'/blog$'}
				tags={['etiqueta1', 'etiqueta2']}
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam vel nesciunt, voluptates assumenda omnis facilis atque doloribus aliquam porro repellendus saepe adipisci, nisi eos et rem temporibus ad nulla dolore?'
				}
				title={'Titulo Blog'}
				id={'blog1'}
			/>
			<CardFullBlog
				image={DefaultImage}
				link={'/blog/blog1'}
				linkTag={'/blog$'}
				tags={['etiqueta1', 'etiqueta2']}
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam vel nesciunt, voluptates assumenda omnis facilis atque doloribus aliquam porro repellendus saepe adipisci, nisi eos et rem temporibus ad nulla dolore?'
				}
				title={'Titulo Blog'}
				id={'blog2'}
			/>
			<CardFullBlog
				image={DefaultImage}
				link={'/blog/blog1'}
				linkTag={'/blog$'}
				tags={['etiqueta1', 'etiqueta2']}
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam vel nesciunt, voluptates assumenda omnis facilis atque doloribus aliquam porro repellendus saepe adipisci, nisi eos et rem temporibus ad nulla dolore?'
				}
				title={'Titulo Blog'}
				id={'blog3'}
			/>
			<Pagination quantity={5} aditionalClass={styles.pagination_blog} />
		</div>
	);
};

export default BlogContent;
