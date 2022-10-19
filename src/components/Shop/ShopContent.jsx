import FilterBar from './FilterBar';
import styles from './Shop.module.scss';
import CardProduct from '../Cards/CardProduct';
import DefaultImage from '../../assets/img/image.jpg';
import Pagination from '../Pagination/Pagination';
import TitleSubCenter from '../Titles/TitleSubCenter';

const ShopContent = () => {
	const data = {
		image: DefaultImage,
		title: 'Titulo',
		description: 'Descripcion del producto.',
		link: '/shop/producto',
		price: '00.0',
	};

	return (
		<div className={styles.shop}>
			<FilterBar />
			<div className={styles.shop_content}>
				<div>
					<TitleSubCenter content={'Productos'} />
					<div className={styles.content_products}>
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
						<CardProduct data={data} />
					</div>
				</div>
				<Pagination aditionalClass={styles.pagination_shop} quantity='5' />
			</div>
		</div>
	);
};

export default ShopContent;
