import CardAnalytics from '../../components/Cards/CardAnalytics';
import { faEye, faNewspaper, faStore } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import ViewContext from '../../context/ViewsContext';
import { useContext, useEffect } from 'react';

const HomeAdmin = () => {
	const { setView } = useContext(ViewContext);

	useEffect(() => {
		setView({ actual: 'Inicio' });
	}, []);

	return (
		<div className='dashboard'>
			<div className='dashboard-container'>
				<div className='insights'>
					<CardAnalytics
						title={'Visitas'}
						pallete={'#10b981'}
						darkPallete={'#0e9e6e'}
						icon={faEye}
						stadistic={0}
					/>
					<CardAnalytics
						title={'Blogs'}
						pallete={'#fde047'}
						darkPallete={'#ddc23d'}
						icon={faNewspaper}
						stadistic={0}
					/>
					<CardAnalytics
						title={'Productos'}
						pallete={'#818cf8'}
						darkPallete={'#707be2'}
						icon={faStore}
						stadistic={0}
					/>
					<CardAnalytics
						title={'Seguidores'}
						pallete={'#3b82f6'}
						icon={faFacebook}
						darkPallete={'#3372d8'}
						stadistic={0}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeAdmin;
