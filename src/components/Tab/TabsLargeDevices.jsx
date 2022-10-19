import styles from './Tab.module.scss';

const TabsLargeDevices = ({ tabs, setTab, tab }) => {
	return (
		<ol className={styles.tab_list}>
			{tabs.map((element, index) => (
				<div
					className={`${styles.tab_toggle} ${
						element.id === tab ? styles['tab_toggle-active'] : ''
					}`}
					key={index}
					onClick={() => {
						setTab(element.id);
					}}
				>
					<span key={index}>{element.name}</span>
				</div>
			))}
		</ol>
	);
};

export default TabsLargeDevices;
