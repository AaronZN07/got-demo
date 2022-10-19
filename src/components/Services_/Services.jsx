import { useState, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

import styles from './Services.module.scss';
import ServiceTab from './ServiceTab';
import ServiceContent from './ServiceContent';

const Services = ({ tabs, children }) => {
	const [active, setActive] = useState(0);
	const [change, setChange] = useState(true);
	const nodeRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			setChange(false);
		}, 200);
		setChange(true);
	}, [active]);

	const transitionStyles = {
		entering: { opacity: 0 },
		entered: { opacity: 0 },
		exiting: { opacity: 1 },
		exited: { opacity: 1 },
	};

	return (
		<div className={styles.services_container}>
			<div className={styles.services_tabs}>
				{tabs.map((element, index) => (
					<ServiceTab
						service={element}
						key={index}
						active={index === active ? true : false}
						setActive={setActive}
						index={index}
					/>
				))}
			</div>
			<Transition in={change} timeout={200} nodeRef={nodeRef}>
				{state => (
					<ServiceContent
						title={tabs[active]}
						content={children[active]}
						active={active}
						transition={{ ...transitionStyles[state] }}
					/>
				)}
			</Transition>
		</div>
	);
};

export default Services;
