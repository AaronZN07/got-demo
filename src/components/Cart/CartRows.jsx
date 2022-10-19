import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import CounterInput from '../Inputs/CounterInput';
import { useEffect, useState } from 'react';

const CartRows = ({ data }) => {
	const [count, setCount] = useState(data.quantity);
	const [totalPrice, setTotalPrice] = useState(data.price * count);

	useEffect(() => {
		setTotalPrice(data.price * count);
	}, [count]);

	return (
		<tr role={'row'}>
			<td className={styles.remove} data-th='Acciones'>
				<span className='fa-layers fa-fw fa-lg'>
					<FontAwesomeIcon icon={faCircle} className='fa-back' />
					<FontAwesomeIcon icon={faClose} transform='shrink-6' />
				</span>
			</td>
			<td className={styles.image} data-th='Producto'>
				<img src={data.image} alt='Imagen de Producto' />
			</td>
			<td className={styles.description} data-th='Descripción'>
				<span> {data.product} </span>
				<span>{data.brand}</span>
				<span>{data.type}</span>
			</td>
			<td data-th='Cantidad'>
				<CounterInput
					initialCount={data.quantity}
					count={count}
					setCount={setCount}
				/>
			</td>
			<td className={styles.unit_price} data-th='Precio Unit'>
				{data.price}
			</td>
			<td className={styles.total_price} data-th='Precio Total'>
				{totalPrice}
			</td>
		</tr>
	);
};

export default CartRows;
