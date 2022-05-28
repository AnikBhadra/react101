import React from 'react'
import ReactDOM from 'react-dom/client'
import Create_jsx from '../Components/Create_jsx'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Create_jsx />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
)
