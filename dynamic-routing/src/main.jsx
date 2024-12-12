
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
// step1
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
)
