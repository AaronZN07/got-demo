import styles from './CardAdminBlog.module.scss';
import timeSince from '../../utils/timeSince';
import CardIconAndText from './CardIconAndText';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CardAdminBlog = ({ data }) => {
	return (
		<div className={styles.card_blog}>
			<div className={styles['card_blog-body']}>
				<div className={styles.card_image}>
					<img src={data.image} alt='Imagen de Blog' />
				</div>
				<div className={styles.card_contet}>
					<h3> {data.title} </h3>
					<p> {data.description} </p>
					<small> {timeSince(new Date(data.timestamp))} </small>
				</div>
				<div className={styles.card_control}>
					<Link to={'edit'}>
						<CardIconAndText icon={faEdit} text={'Editar'} color={'green'} />
					</Link>

					<a href='/blog/blog' target={'_blank'}>
						<CardIconAndText icon={faEye} text={'Ver'} color={'blue'} />
					</a>

					<Link to={'edit'}>
						<CardIconAndText icon={faTrash} text={'Eliminar'} color={'red'} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardAdminBlog;
