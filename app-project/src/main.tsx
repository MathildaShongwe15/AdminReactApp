import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from '../Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>

         <App/>

  </AuthProvider>
  ,
)
