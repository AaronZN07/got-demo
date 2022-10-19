import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import TitleSubLeft from '../../components/Titles/TitleSubLeft';
import BorderBotton from '../../components/Buttons/BorderBotton';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {
	return (
		<main>
			<Breadcrumb
				page={'Carrito de Compras'}
				pagesBefore={[{ page: 'Tienda', link: '/shop' }]}
			/>

			<section className='cart'>
				<div className='cart_header'>
					<TitleSubLeft content={'Mi Carrito de Compras'} />
					<BorderBotton content={'Volver al Caritto'} isBgWhite={true} />
				</div>
				<div className='cart_table'>
					<Cart
						dataHead={[
							'Acciones',
							'Producto',
							'Descripción',
							'Cantidad',
							'Precio Unit',
							'Precio Total',
						]}
					/>
				</div>
			</section>
		</main>
	);
};

export default CartPage;
