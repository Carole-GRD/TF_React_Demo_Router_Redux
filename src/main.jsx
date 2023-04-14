import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Routing : Imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { route } from './routes/route'

// Redux : Imports
import store from './store/store'
import {Provider } from 'react-redux'

// Routing : Création du router
const router = createBrowserRouter(route)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>

      <RouterProvider router={router} />

    </Provider>

  </React.StrictMode>
)
