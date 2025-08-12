import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// import { RouterProvider } from 'react-router-dom';

import { App } from './App';
import './modules/i18n';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Suspense fallback='Loading...'>
		<StrictMode>
			{/* <RouterProvider router={router} /> */}
			<App />
		</StrictMode>
	</Suspense>,
);
