import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AmplitudeReactProvider } from 'amplitude-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AmplitudeReactProvider apiKey="my-api-key">
      <App />
    </AmplitudeReactProvider>
  </React.StrictMode>,
)
