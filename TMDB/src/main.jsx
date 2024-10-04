import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Theme from './components/ui/Theme.jsx'; // Update the path to where your Theme component is located

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);

