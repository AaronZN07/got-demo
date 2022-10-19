import { useContext, useEffect } from 'react';
import ProductForm from '../../../components/ProductCreate/ProductForm';
import ViewContext from '../../../context/ViewsContext';

const ShopCreate = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({
			actual: 'Crear Producto',
			before: [{ link: 'products', page: 'Administrador Productos' }],
		});
	}, []);

	return <ProductForm />;
};

export default ShopCreate;
