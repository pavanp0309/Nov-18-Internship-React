
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Provider store={store}>
    <App />
  </Provider>
 <ToastContainer/>
</BrowserRouter>
)
