import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CouterContextProviber } from './context/CountContext.jsx'
import { ColorTitleContextProvider } from './context/ColortitleContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorTitleContextProvider>
    <CouterContextProviber>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CouterContextProviber>
    </ColorTitleContextProvider>
  </React.StrictMode>,
)
