import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import './i18n'; // language module i18next

const rootElement: any = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Suspense fallback="loading...">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
);