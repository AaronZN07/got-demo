import {
	faFont,
	faImage,
	faRectangleList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './StylesSelection.module.scss';

const StylesSelection = ({
	setSelectingStyle,
	setStyleSection,
	STYLE_LIST,
}) => {
	const handleClick = e => {
		if (e.target.className === styles.item) {
			setStyleSection(e.target.getAttribute('data-style'));
			setSelectingStyle(false);
			return;
		}
		let auxItem = e.target.parentNode;
		let aux = true;
		while (aux) {
			if (auxItem.className === styles.item) {
				aux = false;
				setStyleSection(auxItem.getAttribute('data-style'));
				setSelectingStyle(false);
				return;
			}
			auxItem = auxItem.parentNode;
		}
	};

	return (
		<div className={styles.style_select}>
			<h2 className='text-center col-span-1 sm:col-span-2 md:col-span-3'>
				Seleccione la forma de la sección
			</h2>
			{/* Style 1 */}
			<div className={styles.item} data-style={1} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faFont} />
					<FontAwesomeIcon icon={faImage} />
				</div>
				<p> {STYLE_LIST[1]} </p>
			</div>
			{/* Style 2 */}
			<div className={styles.item} data-style={2} onClick={handleClick}>
				<div className={styles.item_row}>
					<FontAwesomeIcon icon={faFont} />
					<FontAwesomeIcon icon={faImage} />
				</div>
				<p> {STYLE_LIST[2]} </p>
			</div>
			{/* Style 3 */}
			<div className={styles.item} data-style={3} onClick={handleClick}>
				<div className={styles.item_row}>
					<FontAwesomeIcon icon={faImage} />
					<FontAwesomeIcon icon={faFont} />
				</div>
				<p> {STYLE_LIST[3]} </p>
			</div>
			{/* Style 4 */}
			<div className={styles.item} data-style={4} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faFont} />
					<FontAwesomeIcon icon={faImage} />
					<FontAwesomeIcon icon={faRectangleList} />
				</div>
				<p> {STYLE_LIST[4]} </p>
			</div>
			{/* Style 5 */}
			<div className={styles.item} data-style={5} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faFont} />
					<FontAwesomeIcon icon={faRectangleList} />
					<FontAwesomeIcon icon={faImage} />
				</div>
				<p> {STYLE_LIST[5]} </p>
			</div>
			{/* Style 6 */}
			<div className={styles.item} data-style={6} onClick={handleClick}>
				<div className={styles.item_grid_left}>
					<div className={styles.item_col}>
						<FontAwesomeIcon icon={faFont} />
						<FontAwesomeIcon icon={faRectangleList} />
					</div>
					<div className={styles.item_col}>
						<FontAwesomeIcon icon={faImage} />
					</div>
				</div>
				<p> {STYLE_LIST[6]} </p>
			</div>
			{/* Style 7 */}
			<div className={styles.item} data-style={7} onClick={handleClick}>
				<div className={styles.item_grid_left}>
					<div className={styles.item_col}>
						<FontAwesomeIcon icon={faImage} />
					</div>
					<div className={styles.item_col}>
						<FontAwesomeIcon icon={faFont} />
						<FontAwesomeIcon icon={faRectangleList} />
					</div>
				</div>
				<p> {STYLE_LIST[7]} </p>
			</div>
			{/* Style 8 */}
			<div className={styles.item} data-style={8} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faFont} />
					<FontAwesomeIcon icon={faRectangleList} />
				</div>
				<p> {STYLE_LIST[8]} </p>
			</div>
			{/* Style 9 */}
			<div className={styles.item} data-style={9} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faImage} />
					<FontAwesomeIcon icon={faRectangleList} />
				</div>
				<p> {STYLE_LIST[9]} </p>
			</div>
			{/* Style 10 */}
			<div className={styles.item} data-style={10} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faImage} />
				</div>
				<p> {STYLE_LIST[10]} </p>
			</div>
			{/* Style 11 */}
			<div className={styles.item} data-style={11} onClick={handleClick}>
				<div className={styles.item_col}>
					<FontAwesomeIcon icon={faRectangleList} />
				</div>
				<p> {STYLE_LIST[11]} </p>
			</div>
		</div>
	);
};

export default StylesSelection;
