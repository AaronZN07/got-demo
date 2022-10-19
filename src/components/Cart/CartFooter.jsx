import styles from './Cart.module.scss';
import DeleteButton from '../Buttons/DeleteButton';

const CartFooter = () => {
	return (
		<tr>
			<td colSpan={6} className={styles.cart_footer}>
				<DeleteButton content={'Limpiar'} />
			</td>
		</tr>
	);
};

export default CartFooter;
