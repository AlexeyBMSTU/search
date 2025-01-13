import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './app';

/**
 * Встаривание React в HTML
 * @returns
 */
const start = async () => {
  const documentRender = document.getElementById('root');

  const loader = document.querySelector(`.start-loader`);
  if (loader) loader.remove();

  if (!documentRender) return;

  const root = createRoot(documentRender);
  root.render(<App />);
};

export default start;
