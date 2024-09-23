import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contacts from './pages/Contacts.jsx'
import Service from './pages/Service.jsx'
// import Contact from './pages/Contact.jsx'



const router = createHashRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/blog",
    element:<Blog/>,
  },
  {
    path:"/aboutus",
    element:<AboutUs/>,
  },
  {
    path:"/contact",
    element:<Contacts/>,
  },
  {
    path:"/service",
    element:<Service/>,
  },
])


createRoot(document.getElementById('root')).render(

  <StrictMode>
   
   <RouterProvider router ={router} /> 

    
  </StrictMode>,
)
