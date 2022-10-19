import styles from './Breadcrumb.module.scss';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ page, pagesBefore }) => {
	return (
		<div className={styles.breadcrumb}>
			<div className={styles.breadcrumb_container}>
				<h1 className={styles.title}> {page} </h1>
				<div className={styles.breadcrumb_bar}>
					<p>
						<Link to={'/'}>
							<span>Inicio</span>
						</Link>
						{pagesBefore
							? pagesBefore.map((element, index) => (
									<Link key={index} to={element.link}>
										<span className={styles.before_page}> {element.page} </span>
									</Link>
							  ))
							: ''}
						<span className={styles.actual_page}> {page} </span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;
