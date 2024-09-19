import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React 18에서는 ReactDOM.createRoot 사용
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);