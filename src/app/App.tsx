import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

export const App: FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/CV' element={<Index />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
