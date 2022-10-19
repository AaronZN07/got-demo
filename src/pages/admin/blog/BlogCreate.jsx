import { useContext, useEffect } from 'react';
import ViewContext from '../../../context/ViewsContext';
import { BlogProvider } from '../../../context/BlogFormContext';
import ArticleCreatePanel from '../../../components/CreateArticle/ArticleCreatePanel';

const BlogCreate = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({
			actual: 'Crear Post',
			before: [{ link: 'blog', page: 'Administrador de Blog' }],
		});
	}, []);

	return (
		<div className='pb-5'>
			<BlogProvider>
				<ArticleCreatePanel />
			</BlogProvider>
		</div>
	);
};

export default BlogCreate;
