import styles from './MessageAdmin.module.scss';
import Pagination from '../Pagination/Pagination';
import MessageCard from './Cards/MessageCard';
import { useEffect, useState } from 'react';
import MessagesFilter from './MessagesFilter';

const MessageAdminPanel = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const data = {
			id: 0,
			name: 'Nombre Apellido Apellido',
			tel: '12345678',
			email: 'email@gmail.com',
			subject: 'Sujeto del mensaje',
			message:
				'Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje4',
			read: false,
		};
		const data2 = {
			id: 1,
			name: 'Nombre Apellido Apellido',
			tel: '12345678',
			email: 'email@gmail.com',
			subject: 'Sujeto del mensaje',
			message:
				'Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensajeCuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje4',
			read: false,
		};
		setMessages([data, data2]);
	}, []);

	return (
		<div className={styles.message_admin}>
			<div className={styles.messages_container}>
				<div className={styles.filter_messages}>
					<MessagesFilter />
				</div>
				<div className={styles.messages}>
					{messages.map(element => (
						<MessageCard key={element.id} data={element} />
					))}
				</div>
			</div>
			<Pagination quantity={5} aditionalClass={styles.pagination} />
		</div>
	);
};

export default MessageAdminPanel;
