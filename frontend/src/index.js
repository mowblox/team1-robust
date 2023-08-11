import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from 'next-themes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider enableSystem={true} attribute='class'>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
