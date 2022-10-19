import styles from './CounterInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CounterInput = ({ count, setCount }) => {
	const handlePlus = () => (count < 99 ? setCount(count + 1) : setCount(99));
	const handleMinus = () => (count > 1 ? setCount(count - 1) : setCount(1));

	return (
		<div className={styles.counter_input}>
			<button onClick={handlePlus}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
			<span> {count} </span>
			<button onClick={handleMinus}>
				<FontAwesomeIcon icon={faMinus} />
			</button>
		</div>
	);
};

export default CounterInput;
