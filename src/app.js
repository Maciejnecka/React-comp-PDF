'use strict';
import React from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const App = () => {
  return <h1>Hello</h1>;
};

root.render(<App />);
