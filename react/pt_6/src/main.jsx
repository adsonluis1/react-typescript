import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterContextProviber } from './components/CounterContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode> 
      <CounterContextProviber>
          <App />
      </CounterContextProviber>   
    </React.StrictMode>
)
