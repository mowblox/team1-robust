import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from 'next-themes'
import {MetaMaskProvider} from 'metamask-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider enableSystem={true} attribute='class'>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </ThemeProvider>
  </React.StrictMode>
);
