import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>                   //core wrapper component of react-router-dom package
    <App />
  </BrowserRouter>                  //syncs React app UI with browser address bar
);