import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import  Home  from './compoments/Home/Home.jsx'
import  About  from './compoments/About/About.jsx'
import { ContactUs } from './compoments/ContactUs/ContactUs.jsx'
import {User} from './compoments/User/User.jsx'
import  Github from './compoments/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contactUs',
        element: <ContactUs />
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        
        path: 'github',
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
