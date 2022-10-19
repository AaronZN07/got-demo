import { useContext, useEffect } from 'react';
import OrderAdmin from '../../components/order/OrderAdmin';
import ViewContext from '../../context/ViewsContext';

const PurchaseOrderAdmin = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({ actual: 'Ordenes de Compra' });
	}, []);

	return <OrderAdmin />;
};

export default PurchaseOrderAdmin;
