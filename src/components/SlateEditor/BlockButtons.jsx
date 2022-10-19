import styles from './SlateEditor.module.scss';

const BlockButtons = ({ children }) => {
	return <div className={styles.block_buttons}> {children} </div>;
};

export default BlockButtons;
