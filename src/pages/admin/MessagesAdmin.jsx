import { useContext, useEffect } from 'react';
import MessageAdminPanel from '../../components/Messages/MessageAdminPanel';
import ViewContext from '../../context/ViewsContext';

const MessagesAdmin = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({ actual: 'Mensajes' });
	}, []);

	return <MessageAdminPanel />;
};

export default MessagesAdmin;
