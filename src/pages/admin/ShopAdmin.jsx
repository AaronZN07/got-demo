import { useContext, useEffect } from 'react';
import ShopAdminContent from '../../components/Shop/admin/ShopAdminContent';
import ViewContext from '../../context/ViewsContext';

const ShopAdmin = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({ actual: 'Administrar Productos' });
	}, []);

	return (
		<div className='shop_admin'>
			<ShopAdminContent />
		</div>
	);
};

export default ShopAdmin;
