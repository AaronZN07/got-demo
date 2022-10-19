import styles from './Shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import SimpleSearchInput from '../Inputs/SimpleSearchInput';
import SliderUI from '../Slider/Slider';
import { useState } from 'react';
import { Collapse } from 'react-collapse';

const FilterBar = () => {
	const [visible, setVisible] = useState(true);

	const handleVisible = () => setVisible(!visible);

	return (
		<div className={styles.filter_bar}>
			<div
				className={`${styles.filter_title} ${styles.filter_collapse}`}
				onClick={handleVisible}
			>
				<h3>
					Filtros <FontAwesomeIcon icon={faSortDown} className='float-right' />
				</h3>
			</div>

			<Collapse isOpened={visible} theme={{ collapse: styles.react_collapse }}>
				<div className={styles.collapse}>
					<div className={`${styles.filter_search}`}>
						<div className={`${styles.search_title} ${styles.filter_title}`}>
							<h3>Buscar</h3>
						</div>
						<SimpleSearchInput placeholder={'Filtrar'} />
					</div>
					<div className={`${styles.filter_products}`}>
						<div className={`${styles.products_title} ${styles.filter_title}`}>
							<h3>Productos</h3>
						</div>
						<ul>
							<li>
								<input type='checkbox' name='producto' id='producto' />
								<label htmlFor='producto'>
									Producto 1<span>(2)</span>
								</label>
							</li>
							<li>
								<input type='checkbox' name='producto2' id='producto2' />
								<label htmlFor='producto2'>
									Producto 2<span>(2)</span>
								</label>
							</li>
							<li>
								<input type='checkbox' name='producto3' id='producto3' />
								<label htmlFor='producto3'>
									Producto 3<span>(2)</span>
								</label>
							</li>
							<li>
								<input type='checkbox' name='producto4' id='producto4' />
								<label htmlFor='producto4'>
									Producto 4<span>(2)</span>
								</label>
							</li>
							<li>
								<input type='checkbox' name='producto5' id='producto5' />
								<label htmlFor='producto5'>
									Producto 5<span>(2)</span>
								</label>
							</li>
						</ul>
					</div>
					<div className={`${styles.filter_price}`}>
						<div className={`${styles.price_title} ${styles.filter_title}`}>
							<h3>Precio</h3>
						</div>
						<SliderUI maxValue={5000} minValue={1000} />
					</div>
				</div>
			</Collapse>
		</div>
	);
};

export default FilterBar;
