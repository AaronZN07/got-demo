import { Link } from 'react-router-dom';
import BorderBotton from '../Buttons/BorderBotton';

import styles from './Banner.module.scss';

const Banner = ({ title, subtitle, to, link, variant }) => {
	return (
		<div
			className={`${styles.banner} ${
				variant ? styles[`banner-${variant}`] : ''
			}`}
		>
			<div className={styles.banner_container}>
				<div>
					<h2> {title} </h2>
					<h3> {subtitle} </h3>
				</div>

				<div>
					<Link to={link}>
						<BorderBotton content={to} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
