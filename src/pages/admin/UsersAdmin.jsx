import { useContext, useEffect } from 'react';
import ViewContext from '../../context/ViewsContext';

const UsersAdmin = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({ actual: 'Usuarios' });
	}, []);

	return <div>UsersAdmin</div>;
};

export default UsersAdmin;
