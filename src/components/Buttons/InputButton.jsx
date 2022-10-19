import styles from './InputButton.module.scss';

const InputButton = ({ type, placeholder, button }) => {
	return (
		<div className={styles.inputButton}>
			<input className={styles.input} type={type} placeholder={placeholder} />
			<input
				className={styles['button--submit']}
				type='submit'
				value={button}
			/>
		</div>
	);
};

export default InputButton;
