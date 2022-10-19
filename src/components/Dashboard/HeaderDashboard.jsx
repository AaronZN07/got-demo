import {
	faHouse,
	faUserCircle,
	faGear,
	faBell,
	faBarsStaggered,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewContext from '../../context/ViewsContext';
import styles from './HeaderDashboard.module.scss';
import SearchForm from './SearchForm';

const HeaderDashboard = ({ user, isOpen, setIsOpen }) => {
	const { view } = useContext(ViewContext);
	const [isOpenSearch, setIsOpenSearch] = useState(false);

	const handleOpen = () => setIsOpen(!isOpen);
	const handleOpenSearch = () => setIsOpenSearch(!isOpenSearch);

	return (
		<header className={styles.content_header}>
			<div
				className={`${styles.header_user} ${
					isOpenSearch ? styles.search_responsive : ''
				}`}
			>
				<div className={`${styles.header_search} `}>
					<SearchForm view={view} handleOpenSearch={handleOpenSearch} />
				</div>
				<div className={styles.user_options}>
					<button className={styles.icon_search} onClick={handleOpenSearch}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
					<button className={styles.icon_navegation} onClick={handleOpen}>
						<FontAwesomeIcon icon={faBarsStaggered} />
					</button>
					<FontAwesomeIcon icon={faUserCircle} />
					<FontAwesomeIcon icon={faBell} />
					<FontAwesomeIcon icon={faGear} />
				</div>
			</div>
			<div className={styles.header_page}>
				<h2 className={styles.breadcrumb_title}> {view.actual} </h2>
				<div className={styles.header_breadcrumb}>
					<Link to={`/admin/${user}`}>
						<span className={styles.breadcrumb_icon}>
							<FontAwesomeIcon icon={faHouse} />
						</span>
					</Link>
					{view.before
						? view.before.map((element, index) => (
								<Link to={element.link} key={index}>
									<span> - </span>
									<span className={styles.breacrumb_route}>{element.page}</span>
								</Link>
						  ))
						: undefined}
					<span> - </span>
					<span> {view.actual}</span>
				</div>
			</div>
		</header>
	);
};

export default HeaderDashboard;
