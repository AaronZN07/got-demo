import { useEffect, useState } from 'react';
import styles from './Tab.module.scss';
import TabResponsive from './TabResponsive';

const Tab = ({ children, tabs }) => {
	const [tab, setTab] = useState(children[0].props.label);
	const [width, setWidth] = useState(window.innerWidth <= 640);
	children = [children];

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = e => {
		const condition = e.target.innerWidth <= 640;
		setWidth(condition);
	};

	return (
		<div className={styles.tab}>
			<div className={styles.tab_options}>
				<TabResponsive setTab={setTab} tabs={tabs} width={width} tab={tab} />
			</div>
			<div className={styles.tab_container}>
				{children[0].map((element, index) => (
					<div
						key={index}
						className={`${styles.tab_content} ${
							element.props.label === tab ? styles['tab_content-active'] : ''
						}`}
					>
						{element}
					</div>
				))}
			</div>
		</div>
	);
};

export default Tab;
