import { faEye } from '@fortawesome/free-solid-svg-icons';
import CardAnalytics from '../Cards/CardAnalytics';
import styles from './OrderAdmin.module.scss';

const OrderAdmin = () => {
	return (
		<div className={styles.order_admin}>
			<div className={styles.order_e}>
				<CardAnalytics
					title={'Total de Ordenes'}
					pallete={'#10b981'}
					darkPallete={'#0e9e6e'}
					icon={faEye}
					stadistic={0}
					percentage={false}
				/>
				<CardAnalytics
					title={'Ordenes Pendientes'}
					pallete={'#10b981'}
					darkPallete={'#0e9e6e'}
					icon={faEye}
					stadistic={0}
					percentage={false}
				/>
				<CardAnalytics
					title={'Ordenes Finalizadas'}
					pallete={'#10b981'}
					darkPallete={'#0e9e6e'}
					icon={faEye}
					stadistic={0}
					percentage={false}
				/>
			</div>
		</div>
	);
};

export default OrderAdmin;
