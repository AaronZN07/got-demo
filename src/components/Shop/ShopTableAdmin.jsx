import DefaultImage from '../../assets/img/image.jpg';
import ProductCardAdmin from './Cards/ProductCardAdmin';

const ShopTableAdmin = () => {
	const data = {
		image: DefaultImage,
		title: 'Titulo',
		description: 'Descripcion del producto.',
		price: '00.0',
		timestamp: '04/04/2022',
	};

	return (
		<div className='shop_admin-table'>
			<ProductCardAdmin data={data} />
			<ProductCardAdmin data={data} />
			<ProductCardAdmin data={data} />
			<ProductCardAdmin data={data} />
			<ProductCardAdmin data={data} />
		</div>
	);
};

export default ShopTableAdmin;
