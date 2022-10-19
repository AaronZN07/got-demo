import { useParams } from 'react-router-dom';
import ArticleComponent from '../../components/Article/ArticleComponent';

const Article = () => {
	const { article } = useParams();

	return (
		<main>
			<article className='blog_article'>
				<ArticleComponent id={article} />
			</article>
		</main>
	);
};

export default Article;
