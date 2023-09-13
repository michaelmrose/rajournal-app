import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme, ThemePanel, Box } from '@radix-ui/themes';
import './index.css';
import App from './pages/App/App';
import '@radix-ui/themes/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Theme  appearance='light' hasBackground="true"  accentColor='violet' radius="large" scaling='95%'>
        <App /> 
        </Theme>
        </Router>
  </React.StrictMode>
);