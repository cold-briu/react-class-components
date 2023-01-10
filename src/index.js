import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const HOY = new Date().toUTCString()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App mensaje={HOY} />

);

