import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LanguageProvider from './context/LanguageContext';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
