import styles from './Cart.module.scss';
import Table from '../Tables/Table';
import CartRows from './CartRows';
import DefaultImage from '../../assets/img/image.jpg';
import CartFooter from './CartFooter';

const Cart = ({ dataHead }) => {
	return (
		<Table dataHead={dataHead} styleTable={styles.cart} footer={<CartFooter />}>
			<CartRows
				data={{
					image: DefaultImage,
					product: 'Nombre Producto',
					brand: 'Marca Producto',
					type: 'Tipo Producto',
					quantity: 1,
					price: 1000,
				}}
			/>
			<CartRows
				data={{
					image: DefaultImage,
					product: 'Nombre Producto',
					brand: 'Marca Producto',
					type: 'Tipo Producto',
					quantity: 1,
					price: 1000,
				}}
			/>
		</Table>
	);
};

export default Cart;
