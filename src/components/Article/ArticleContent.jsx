import styles from './ArticleContent.module.scss';
import TitleSubCenter from '../Titles/TitleSubCenter';
import timeSince from '../../utils/timeSince';
import DefaultImage from '../../assets/img/image.jpg';
import CardBlog from '../Cards/CardBlog';
import SectionController from './sections/SectionController';
import SocialShare from './SocialShare';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const ArticleContent = ({ data, relativePost = true, social = true }) => {
	const { header, body, author, metadata, preview } = data;
	const time = timeSince(new Date(header.timestamp));

	const sections = [];
	for (const key in body) {
		if (Object.hasOwnProperty.call(body, key)) {
			const element = body[key];
			if (element.id === 'Principal') break;
			sections.push(element);
		}
	}

	return (
		<div className={styles.content}>
			<div className={styles.article_header}>
				<TitleSubCenter
					content={header.title ? header.title : 'Sin titulo'}
					isHeader={true}
				/>
			</div>
			<div className={styles.article_img}>
				<img
					src={header.image ? header.image : DefaultImage}
					alt={`Imagen de ${header.title}`}
				/>
			</div>
			<div className={styles.article_content}>
				<div className={styles.article_metadata}>
					<div className={styles.metadata}>
						<Link to={!preview && `/blog/${metadata?.category.name}`}>
							<span
								className={`${styles.category}`}
								style={{
									backgroundColor: metadata.category.color
										? metadata.category.color
										: 'red',
								}}
							>
								{metadata.category?.name
									? metadata.category?.name
									: 'Sin categoria asignada'}
							</span>
						</Link>
						<div className={styles.tags}>
							<FontAwesomeIcon icon={faTags} />
							{metadata.tags.length !== 0 ? (
								metadata.tags.map((element, i, row) => (
									<Link to={!preview && `/blog/${element}`} key={element}>
										<span className={styles.tag}>{element}</span>
										{i + 1 !== row.length ? ', ' : ''}
									</Link>
								))
							) : (
								<span>No hay etiquetas asigandas</span>
							)}
						</div>
					</div>
					{social && <SocialShare />}
				</div>
				<div className={styles.content_body}>
					<SectionController
						style={body.principal?.style}
						data={body?.principal}
					/>
					{sections.map((element, index) => (
						<SectionController
							key={index}
							data={element}
							style={element?.style}
						/>
					))}
				</div>
				<div className={styles.content_footer}>
					<div className={styles.avatar}>
						<span></span>
						<img
							src={author.avatar ? author.avatar : DefaultImage}
							alt={author.author && 'Foto de Autor'}
						/>
						<span></span>
					</div>
					<span> {author.author ? author.author : 'Autor Desconocido'} </span>
				</div>
				{relativePost && (
					<div className={styles.content_similar}>
						<TitleSubCenter content={'Articulos Similares'} />
						<div className={styles.similar_cards}>
							<CardBlog
								image={DefaultImage}
								lastUpdate={time}
								link={'/blog/blog1'}
								tag={'Etiqueta'}
								tagLink={'/blog/blog1'}
								text={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisuscipit eveniet voluptatum est quidem'
								}
								title={'Titulo'}
							/>
							<CardBlog
								image={DefaultImage}
								lastUpdate={time}
								link={'/blog/blog1'}
								tag={'Etiqueta'}
								tagLink={'/blog/blog1'}
								text={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisuscipit eveniet voluptatum est quidem'
								}
								title={'Titulo'}
							/>
							<CardBlog
								image={DefaultImage}
								lastUpdate={time}
								link={'/blog/blog1'}
								tag={'Etiqueta'}
								tagLink={'/blog/blog1'}
								text={
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisuscipit eveniet voluptatum est quidem'
								}
								title={'Titulo'}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ArticleContent;
