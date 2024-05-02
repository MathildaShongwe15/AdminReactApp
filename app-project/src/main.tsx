import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from '../src/screens/Dashboard'
import ManageProviders from '../src/screens/ManageProviders'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ManageProviders/>
  </React.StrictMode>,
)
