import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contacts from './pages/Contacts.jsx'
import Service from './pages/Service.jsx'
import Content from './pages/Content.jsx'
import Seo from './pages/Seo.jsx'
import Ppc from './pages/Ppc.jsx'
import Email from './pages/Email.jsx'
import Social from './pages/Social.jsx'
import Digital from './pages/Digital.jsx'
import WebDesign from './pages/WebDesign.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'




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
 {
  path:"/contentMarketing",
  element:<Content/>
 },
 {
  path:"/seo",
  element:<Seo/>
 },
 {

  path:"/ppc",
  element:<Ppc/>
 },
 {
  path:"/emailMarketing",
  element:<Email/>
 },
 {
  path:"/socialMedia",
  element:<Social/>
 },
 {
  path:"/digitalMarketing",
  element:<Digital/>
 },
 {
   path:"/webDesign",
   element:<WebDesign/>
 },
 {
  path:"/privacy",
  element:<Privacy/>
 },
 {
  path:"/terms",
  element:<Terms/>
 }
])


createRoot(document.getElementById('root')).render(

  <StrictMode>
   
   <RouterProvider router ={router} /> 

    
  </StrictMode>,
)
