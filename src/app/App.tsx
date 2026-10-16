import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

import CyberThemeProvider from '@/shared/theme/CyberThemeProvider';

export const App: FC = () => {
	const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

	return (
		<CyberThemeProvider>
			<BrowserRouter basename={basename || undefined}>
				<Routes>
					<Route path='/' element={<Index />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</CyberThemeProvider>
	);
};
