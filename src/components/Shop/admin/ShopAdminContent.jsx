import { Link } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import SimpleButton from '../../Buttons/SimpleButton';
import ModalCategories from '../modals/ModalCategories';
import ShopTableAdmin from '../ShopTableAdmin';

const ShopAdminContent = () => {
	const [isOpen, handleOpen, handleClose] = useModal(false);

	return (
		<div>
			<ModalCategories isOpen={isOpen} handleClose={handleClose} />
			<div className='flex gap-5'>
				<SimpleButton
					onClick={handleOpen}
					content={'Categorias'}
					isButton={true}
				/>
				<Link to={'create'}>
					<SimpleButton content={'Añadir Artículo'} isButton={true} />
				</Link>
			</div>
			<ShopTableAdmin />
		</div>
	);
};

export default ShopAdminContent;
