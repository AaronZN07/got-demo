import {
	faFolder,
	faFolderOpen,
	faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './MessageAdmin.module.scss';

const MessagesFilter = () => {
	const [active, setActive] = useState('all');

	const handleSubmit = e => {
		e.preventDefault();
		alert('Se envia');
	};

	const handleMessages = e => {
		setActive(e.target.id);
	};

	return (
		<div className={styles.filter}>
			<form onSubmit={handleSubmit} className={styles.search}>
				<input
					name='search_message'
					id='search_message'
					placeholder='Buscar mensaje'
					type={'search'}
				/>
			</form>

			<div className={styles.filt_messages}>
				<button
					className={`${active === 'all' && styles.active_button} 
                    ${styles.filt_button}`}
					id={'all'}
					onClick={handleMessages}
				>
					<FontAwesomeIcon icon={faInbox} id={'all'} />
					<span id={'all'}>Todos</span>
				</button>
				<button
					className={`${active === 'read' && styles.active_button} 
                    ${styles.filt_button}`}
					id={'read'}
					onClick={handleMessages}
				>
					<FontAwesomeIcon icon={faFolder} id={'read'} />
					<span id={'read'}>Leídos</span>
				</button>
				<button
					className={`${active === 'unread' && styles.active_button} 
                    ${styles.filt_button}`}
					id={'unread'}
					onClick={handleMessages}
				>
					<FontAwesomeIcon icon={faFolderOpen} id={'unread'} />
					<span id={'unread'}>Sin Leer</span>
				</button>
			</div>
		</div>
	);
};

export default MessagesFilter;
