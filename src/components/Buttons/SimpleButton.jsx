import styles from './SimpleButton.module.scss';
const SimpleButton = ({ isButton, content, onClick, customStyle }) => {
	return (
		<input
			type={isButton ? 'button' : 'submit'}
			value={content}
			className={`${styles['simple-botton']} ${
				customStyle ? customStyle : styles['simple-botton-dark']
			}`}
			onClick={onClick ? onClick : undefined}
		/>
	);
};

export default SimpleButton;
