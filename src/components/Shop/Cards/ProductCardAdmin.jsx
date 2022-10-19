import styles from './ProductCardAdmin.module.scss';
import IconButton from '../../Buttons/IconButton';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductCardAdmin = ({ data }) => {
	return (
		<div className={styles.product_card}>
			<div className={styles.card_img}>
				<img src={data.image} alt={data.title} />
			</div>
			<div className={styles.card_body}>
				<div className={styles.body_info}>
					<p> {data.title} </p>
					<p className='price'> {data.price} </p>
				</div>
				<div className={styles.body_actions}>
					<IconButton icon={faEdit} text={'Editar'} color={'green'} />
					<IconButton icon={faTrash} text={'Eliminar'} color={'red'} />
				</div>
			</div>
		</div>
	);
};

export default ProductCardAdmin;
