import { StrictMode, Suspense } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './i18n';

const rootElement: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(rootElement!);

root.render(
	<Suspense fallback='Loading...'>
		<StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StrictMode>
	</Suspense>,
);
