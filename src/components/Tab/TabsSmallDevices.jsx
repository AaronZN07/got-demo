import Select from '../Select/Select';
import { formatID } from '../../utils/formatId';

const TabsSmallDevices = ({ setTab, tab, tabs }) => {
	const handleChange = e => {
		setTab(e.target.value);
	};

	return (
		<Select
			values={tabs.map(element => element.name)}
			onChange={handleChange}
			name={'tabs_select'}
			activeValue={
				tabs.filter(element => formatID(element.name) === tab)[0].name
			}
		/>
	);
};

export default TabsSmallDevices;
