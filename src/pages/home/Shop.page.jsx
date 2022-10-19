import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ShopContent from '../../components/Shop/ShopContent';

const Shop = () => {
	return (
		<main>
			<Breadcrumb page={'Tienda'} />
			<section className='shop'>
				<div className='container mx-auto py-5'>
					<ShopContent />
				</div>
			</section>
		</main>
	);
};

export default Shop;
