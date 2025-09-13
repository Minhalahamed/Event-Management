import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import WelcomeModal from './components/WelcomeModal.jsx';

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <WelcomeModal/>
    <App />

    </BrowserRouter>
  
  
);
