import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< Updated upstream
import Maxwell from './components/maxwell.jsx'
=======
import Rick from './components/Rick.jsx'
>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<<<<<<< Updated upstream
    <Maxwell/>
=======
    <Rick />
>>>>>>> Stashed changes
  </StrictMode>,
)
