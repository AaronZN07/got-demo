import styles from './BlogAside.module.scss';
import SimpleSearchInput from '../Inputs/SimpleSearchInput';
import { Link } from 'react-router-dom';
import DefaultImage from '../../assets/img/image.jpg';
import ImageAndText from '../Cards/ImageAndText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const BlogAside = () => {
	return (
		<div className={styles.blog_aside}>
			<div className={`${styles.filter_search}`}>
				<div className={`${styles.search_title} ${styles.filter_title}`}>
					<h3>Buscar</h3>
				</div>
				<SimpleSearchInput placeholder={'Buscar Blog'} />
			</div>
			<div className={`${styles.filter_categorie}`}>
				<div className={`${styles.products_title} ${styles.filter_title}`}>
					<h3>Categorias</h3>
				</div>
				<ul>
					<li>
						<Link to={'/blog'}>Categoria 1</Link>
					</li>
					<li>
						<Link to={'/blog'}>Categoria 2</Link>
					</li>
					<li>
						<Link to={'/blog'}>Categoria 3</Link>
					</li>
					<li>
						<Link to={'/blog'}>Categoria 4</Link>
					</li>
					<li>
						<Link to={'/blog'}>Categoria 5</Link>
					</li>
				</ul>
			</div>
			<div className={styles.filter_recent}>
				<div className={`${styles.recent_title} ${styles.filter_title}`}>
					<h3>Post Recientes</h3>
				</div>
				<ul>
					<li>
						<Link to={'/blog'}>
							<ImageAndText alt={'blog'} icon={DefaultImage}>
								<div>
									<h3>Titulo de Blog</h3>
									<div className={styles.recent_info}>
										<FontAwesomeIcon icon={faCalendar} />
										<span>Julio 20, 2022</span>
									</div>
								</div>
							</ImageAndText>
						</Link>
					</li>
					<li>
						<Link to={'/blog'}>
							<ImageAndText alt={'blog'} icon={DefaultImage}>
								<div>
									<h3>Titulo de Blog</h3>
									<div className={styles.recent_info}>
										<FontAwesomeIcon icon={faCalendar} />
										<span>Julio 20, 2022</span>
									</div>
								</div>
							</ImageAndText>
						</Link>
					</li>
					<li>
						<Link to={'/blog'}>
							<ImageAndText alt={'blog'} icon={DefaultImage}>
								<div>
									<h3>Titulo de Blog</h3>
									<div className={styles.recent_info}>
										<FontAwesomeIcon icon={faCalendar} />
										<span>Julio 20, 2022</span>
									</div>
								</div>
							</ImageAndText>
						</Link>
					</li>
				</ul>
			</div>
			<div className={`${styles.filter_tags}`}>
				<div className={`${styles.tags_title} ${styles.filter_title}`}>
					<h3>Etiquetas Populares</h3>
				</div>
				<div className={styles.tags_container}>
					<Link to={'/blog'}>Veterinaria</Link>
					<Link to={'/blog'}>Medicina</Link>
					<Link to={'/blog'}>Juguetes</Link>
					<Link to={'/blog'}>Ropa</Link>
					<Link to={'/blog'}>Pitbull</Link>
					<Link to={'/blog'}>Perros</Link>
					<Link to={'/blog'}>Gatos</Link>
					<Link to={'/blog'}>Correas</Link>
					<Link to={'/blog'}>Productos de Cuidado</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogAside;
