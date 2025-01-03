
import { createRoot } from 'react-dom/client'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
   <>
    <App />
    <ToastContainer/>
   </>

)
