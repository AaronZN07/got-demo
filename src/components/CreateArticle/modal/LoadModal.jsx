import { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';
import styles from './LoadModal.module.scss';
import modalStyles from './modal.module.scss';

const EXTENSION = '.gotblog';

const LoadModal = ({ isOpen, handleClose, setForm, setSection, setName }) => {
	const local = localStorage;

	const [blog, setBlog] = useState(null);
	const [blogsLocale, setBlogsLocale] = useState([]);

	useEffect(() => {
		for (const key in local) {
			if (key.includes(EXTENSION)) {
				setBlogsLocale(values => [...values, key]);
			}
		}
	}, []);

	const handleSelected = e => setBlog(e.target.id);

	const handleUpload = () => {
		if (blog) {
			const { form, sections } = JSON.parse(localStorage.getItem(blog));
			setForm(JSON.parse(form));
			setName(blog.replace(EXTENSION, ''));
			setSection(JSON.parse(sections));
			handleClose();
		}
	};

	const handleEliminate = () => {
		local.removeItem(blog);
		setBlogsLocale(values => values.filter(obj => obj !== blog));
		setBlog(blogsLocale[0] ? blogsLocale[0] : null);
	};

	const handleRefresh = () => {
		setBlogsLocale([]);
		for (const key in local) {
			if (key.includes(EXTENSION)) {
				setBlogsLocale(values => [...values, key]);
			}
		}
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<div className={styles.load_modal}>
				<h2>Cargar Blog</h2>

				<div className={styles.data}>
					{blogsLocale.length !== 0 ? (
						blogsLocale.map((element, index) => (
							<div
								className={`${styles.row} ${
									blog === element ? styles.row_selected : ''
								}`}
								key={index}
								onClick={e => handleSelected(e)}
								id={element}
							>
								<span id={element}>{element}</span>
							</div>
						))
					) : (
						<div className={`${styles.row}`}>
							<span>No hay datos por mostrar</span>
						</div>
					)}
				</div>

				<div className={styles.buttons}>
					<button
						className={`${modalStyles.button} ${modalStyles.button_danger}`}
						onClick={handleEliminate}
					>
						Eliminar
					</button>
					<button
						className={`${modalStyles.button} ${modalStyles.button_success}`}
						onClick={handleUpload}
					>
						Cargar
					</button>
					<button
						className={`${modalStyles.button} ${modalStyles.button_warning}`}
						onClick={handleRefresh}
					>
						Refrescar
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default LoadModal;
