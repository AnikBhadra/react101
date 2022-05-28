import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h2>Hello world from main.jsx</h2>
    <React.StrictMode>

      <App />
    </React.StrictMode>
  </>
)
