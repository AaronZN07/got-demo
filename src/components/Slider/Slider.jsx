import { useState } from 'react';
import styles from './Slider.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderUI = ({ minValue, maxValue }) => {
	const [range, setRange] = useState([minValue, maxValue]);

	const handleChange = e => {
		setRange(e);
	};

	return (
		<div className={styles.slider}>
			<div className={styles.slider_values}>
				<h4 className={styles.slider_min}>{range[0]}</h4>
				<span className={styles.separator}>-</span>
				<h4 className={styles.slider_max}>{range[1]}</h4>
			</div>
			<Slider
				range
				defaultValue={[minValue, maxValue]}
				allowCross={false}
				onChange={handleChange}
				step={(maxValue - minValue) * 0.05}
				min={minValue}
				max={maxValue}
			/>
		</div>
	);
};

export default SliderUI;
