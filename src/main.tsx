import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Explicit React hooks initialization
if (typeof window !== 'undefined') {
  (window as any).React = React;
  
  // Debug: Verify React is properly initialized
  console.log('React hooks initialized:', {
    useState: typeof React.useState,
    useRef: typeof React.useRef,
    useContext: typeof React.useContext
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);