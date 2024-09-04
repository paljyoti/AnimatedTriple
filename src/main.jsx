import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
// import Contact from './pages/Contact.jsx'



const router = createHashRouter([
  {
    path:"/",
    element:<App />
  },
  // {
  //   path:"/contact",
  //   element : <Contact/>
  // }
])


createRoot(document.getElementById('root')).render(

  <StrictMode>
   
   <RouterProvider router ={router} /> 

    
  </StrictMode>,
)
