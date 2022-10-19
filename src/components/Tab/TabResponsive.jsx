import TabsLargeDevices from './TabsLargeDevices';
import TabsSmallDevices from './TabsSmallDevices';

const TabResponsive = ({ tabs, setTab, width, tab }) => {
	return (
		<>
			{!width && <TabsLargeDevices setTab={setTab} tab={tab} tabs={tabs} />}
			{width && <TabsSmallDevices setTab={setTab} tab={tab} tabs={tabs} />}
		</>
	);
};

export default TabResponsive;
