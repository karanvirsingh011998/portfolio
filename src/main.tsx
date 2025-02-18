import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter basename="/portfolio"> */}
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>
);