import ReactDom, { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <App />
  </>
);
