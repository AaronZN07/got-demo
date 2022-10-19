import { Link } from 'react-router-dom';
import SimpleButton from '../../Buttons/SimpleButton';
import CardAdminBlog from '../../Cards/CardAdminBlog';
import Pagination from '../../Pagination/Pagination';
import DefaultImage from '../../../assets/img/image.jpg';
import { useModal } from '../../../hooks/useModal';
import CategoriesBlogModal from '../modals/CategoriesBlogModal';
import TagsBlogModal from '../modals/TagsBlogModal';

const BlogAdminPanel = () => {
	const [isOpenCategories, handleOpenCategories, handleCloseCategories] =
		useModal(false);
	const [isOpenTags, handleOpenTags, handleCloseTags] = useModal(false);

	const data = {
		image: DefaultImage,
		title: 'Titulo',
		description:
			'Descripcion del Post. Descripcion del Post. Descripcion del Post. Descripcion del Post.',
		timestamp: '05/01/2022',
	};

	return (
		<>
			<CategoriesBlogModal
				isOpen={isOpenCategories}
				handleClose={handleCloseCategories}
			/>
			<TagsBlogModal isOpen={isOpenTags} handleClose={handleCloseTags} />
			<div className='blog_admin-controls flex gap-5 flex-wrap'>
				<SimpleButton
					content={'Categorias'}
					isButton={true}
					onClick={handleOpenCategories}
				/>
				<SimpleButton
					content={'Etiquetas'}
					isButton={true}
					onClick={handleOpenTags}
				/>
				<Link to={'create'}>
					<SimpleButton content={'Añadir Post'} isButton={true} />
				</Link>
			</div>

			<div className='blog_admin-table'>
				<CardAdminBlog data={data} />
				<CardAdminBlog data={data} />
				<CardAdminBlog data={data} />

				<Pagination quantity={5} aditionalClass='pagination_blog_admin' />
			</div>
		</>
	);
};

export default BlogAdminPanel;
