import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './modules/i18n';
import './styles/index.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 12 * 60 * 60 * 1000,
			gcTime: 24 * 60 * 60 * 1000,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Suspense fallback='Loading...'>
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</StrictMode>
	</Suspense>,
);
