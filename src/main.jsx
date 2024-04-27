import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routers}>
    </RouterProvider>
    <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
