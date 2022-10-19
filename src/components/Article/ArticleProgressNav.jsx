import { useEffect, useRef } from 'react';
import styles from './ArticleProgressNav.module.scss';

const NavProgress = ({ referenceBlog }) => {
	const ref = useRef();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const marginNav = document.body.style.paddingTop;
		const { scrollTop, scrollHeight } = document.documentElement;
		const scrollPercent =
			(scrollTop / (scrollHeight - window.innerHeight)) * 100;

		ref.current.style.setProperty('--progress', `${scrollPercent}%`);

		if (referenceBlog.current.getBoundingClientRect().top - 100 < 0) {
			document.body.style.paddingTop = `${
				marginNav + ref.current.offsetHeight
			}px`;
			ref.current.classList.add(styles.sticky);
			ref.current.style.setProperty('--margin', `${marginNav}`);
		} else {
			ref.current.style.setProperty('--margin', `0px`);
			ref.current.classList.remove(styles.sticky);
		}
	};

	return <div className={styles.progress} ref={ref}></div>;
};

export default NavProgress;
