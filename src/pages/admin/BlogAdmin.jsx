import { useContext, useEffect } from 'react';
import BlogAdminPanel from '../../components/Article/admin/BlogAdminPanel';
import ViewContext from '../../context/ViewsContext';

const BlogAdmin = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({ actual: 'Administrar Blog' });
	}, []);

	return (
		<div className='blog_admin'>
			<BlogAdminPanel />
		</div>
	);
};

export default BlogAdmin;
