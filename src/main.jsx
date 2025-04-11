import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Rick from './components/Rick.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Rick />
  </StrictMode>,
)
