import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.scss';

const Pagination = ({ aditionalClass, quantity }) => {
	const arrayQuantity = Array.from(Array(parseInt(quantity, 10)).keys());

	return (
		<div
			className={`${aditionalClass ? aditionalClass : undefined} ${
				styles.pagination
			}`}
		>
			<ul className={styles.pagination_content}>
				<Link to={'/shop'}>
					<li className={`${styles.prev_pagination}`}>
						<FontAwesomeIcon icon={faAngleLeft} /> Anterior
					</li>
				</Link>
				{arrayQuantity.map((element, index) => (
					<Link to={`/shop/${element + 1}`} key={index}>
						<li className={`${styles.item_pagination}`}>
							{/* ${styles.active} */}
							{element + 1}
						</li>
					</Link>
				))}
				<Link to={'/shop'}>
					<li className={`${styles.next_pagination}`}>
						Siguiente
						<FontAwesomeIcon icon={faAngleRight} />
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default Pagination;
