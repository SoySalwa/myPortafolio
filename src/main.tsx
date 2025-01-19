import React from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)
