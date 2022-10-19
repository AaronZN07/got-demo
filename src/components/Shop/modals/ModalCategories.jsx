import { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import styles from './ModalCategories.module.scss';
import modalCore from './../../Modal/Modal.module.scss';
import CreateCategoryForm from './CreateCategoryForm';

const ModalCategories = ({ isOpen, handleClose }) => {
	const [categories, setCategories] = useState([]);
	const [selected, setSelected] = useState(null);
	const [isAdding, setIsAdding] = useState(false);
	const [form, setForm] = useState({});

	useEffect(() => {
		setCategories([
			{ id: '1', name: 'Correas' },
			{ id: '2', name: 'Comida' },
			{ id: '3', name: 'Medicamento' },
			{ id: '4', name: 'Correas' },
			{ id: '5', name: 'Comida' },
			{ id: '6', name: 'Medicamento' },
		]);
	}, [isAdding]);

	const handleSelected = e =>
		setSelected(categories.filter(element => element.id === e.target.id)[0]);

	const handleEdit = () => {
		setForm({ id: selected.id, category_name: selected.name });
		setIsAdding(true);
	};

	const handleAdd = () => {
		setForm([{ category_name: selected.name }]);
		setIsAdding(true);
	};

	const handleDelete = () => {
		if (selected.id) {
			alert('Se elimina');
		}
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			{isAdding ? (
				<CreateCategoryForm
					setIsAdding={setIsAdding}
					form={form}
					setForm={setForm}
				/>
			) : (
				<div className={styles.modal_categories}>
					<h2>Categorias de Productos</h2>
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
									<span id={element.id}>{element.name}</span>
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

export default ModalCategories;
