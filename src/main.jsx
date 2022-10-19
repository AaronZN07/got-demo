import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ScrollToTop from './utils/scrolltoTop';
import App from './App';

import './assets/scss/app.scss';
import React from 'react';

const container = document.getElementById('root');

const root = createRoot(container);

// *! Comentar código

root.render(
	<React.StrictMode>
		<Router>
			<ScrollToTop />
			<App />
		</Router>
	</React.StrictMode>
);
