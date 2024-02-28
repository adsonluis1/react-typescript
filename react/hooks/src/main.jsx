import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { HookUseContext } from './components/HookUseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </HookUseContext>
  </React.StrictMode>,
)
