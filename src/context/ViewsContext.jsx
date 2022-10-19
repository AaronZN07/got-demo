import { createContext, useState } from 'react';

const ViewContext = createContext();

const initialView = { actual: '', before: [] };

const ViewProvider = ({ children }) => {
	const [view, setView] = useState(initialView);

	const data = {
		view,
		setView,
	};

	return <ViewContext.Provider value={data}>{children}</ViewContext.Provider>;
};

export { ViewProvider };
export default ViewContext;
