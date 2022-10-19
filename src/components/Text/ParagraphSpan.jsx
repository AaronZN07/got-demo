import styles from './ParagraphSpan.module.scss';

const ParagraphSpan = ({ p, span }) => {
	return (
		<p className={styles.ParagrapghSpan}>
			{p} <span> {span} </span>
		</p>
	);
};

export default ParagraphSpan;
