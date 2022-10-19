import styles from './CardMessage.module.scss';
import randomColor from '../../utils/randomColor';
import timeSince from '../../utils/timeSince';

const CardMessage = ({ name, children, timestamp }) => {
	return (
		<div className={styles.message}>
			<div
				className={styles.photo}
				style={{ backgroundColor: randomColor(name).hex }}
			>
				<img
					src={`https://anonymous-animals.azurewebsites.net/avatar/${name}`}
					alt={'Avatar Usuario'}
				/>
			</div>
			<div className={styles.content}>
				<p>
					<b> {name}: </b>
					<span> {children} </span>
				</p>
				<small> {timeSince(new Date(timestamp))} </small>
			</div>
		</div>
	);
};

export default CardMessage;
