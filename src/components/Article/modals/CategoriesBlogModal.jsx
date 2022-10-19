import { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import CreateCategoryBlogForm from './CreateCategoryBlogForm';
import styles from './CategoryTagsBlog.module.scss';
import modalCore from './../../Modal/Modal.module.scss';

const CategoriesBlogModal = ({ isOpen, handleClose }) => {
	const [categories, setCategories] = useState([]);
	const [selected, setSelected] = useState(null);
	const [isAdding, setIsAdding] = useState(false);
	const [form, setForm] = useState({});

	useEffect(() => {
		setCategories([
			{ id: '1', name: 'Cuidados de perro', color: '#000' },
			{ id: '2', name: 'Mascotas', color: '#AffBCE' },
			{ id: '3', name: 'Salud', color: '#1ff' },
			{ id: '4', name: 'Gatos', color: '#ff3' },
			{ id: '5', name: 'Animales', color: '#f2f' },
			{ id: '6', name: 'Perros', color: '#A3BC' },
		]);
	}, [isAdding]);

	const handleSelected = e =>
		setSelected(categories.filter(element => element.id === e.target.id)[0]);

	const handleEdit = () => {
		setForm({
			id: selected.id,
			category_name: selected.name,
			color: selected.color,
		});
		setIsAdding(true);
	};

	const handleAdd = () => {
		setForm([{ category_name: selected.name }]);
		setIsAdding(true);
	};

	const handleDelete = () => {
		if (selected.id) {
			alert(`Se elimina ${selected.id}-${selected.name}-${selected.color}`);
		}
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			{isAdding ? (
				<CreateCategoryBlogForm
					setIsAdding={setIsAdding}
					form={form}
					setForm={setForm}
				/>
			) : (
				<div className={styles.modal_categories}>
					<h2>Categorias</h2>
					<div className={styles.categories}>
						{categories.length !== 0 ? (
							categories.map(element => (
								<div
									className={`${styles.row} ${
										selected?.id === element.id ? styles.row_selected : ''
									}`}
									key={element.id}
									onClick={e => handleSelected(e)}
									id={element.id}
								>
									<span id={element.id} className={'flex items-center'}>
										{element.name}
										<div
											className='ml-3 w-5 h-5 border'
											style={{ backgroundColor: element.color }}
										></div>
									</span>
								</div>
							))
						) : (
							<div className={`${styles.row}`}>
								<span>No hay datos por mostrar</span>
							</div>
						)}
					</div>
					<div className={styles.actions}>
						<div
							className={`${modalCore.button_close} ${
								selected !== null && styles.button_active_delete
							}`}
						>
							<button
								className={styles.button_delete}
								onClick={handleDelete}
								type={'button'}
							>
								Eliminar Categoria
							</button>
						</div>
						<div
							className={`${modalCore.button_close} ${
								selected !== null && styles.button_active_edit
							}`}
						>
							<button
								className={styles.button_edit}
								onClick={handleEdit}
								type={'button'}
							>
								Editar Categoria
							</button>
						</div>
						<div className={`${modalCore.button_close} ${styles.button_add}`}>
							<button onClick={handleAdd} type={'button'}>
								Añadir Categoria
							</button>
						</div>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default CategoriesBlogModal;
