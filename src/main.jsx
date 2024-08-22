import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App />
  </Provider>,
  </StrictMode>,
)
