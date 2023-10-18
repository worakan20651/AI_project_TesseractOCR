import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './page/homepage'
import AboutText from '../src/components/aboutText';
import CareerText from '../src/components/careerText';
import ContactText from '../src/components/contactText';
import Splashpage from './page/splashpage'
import {createBrowserRouter , RouterProvider } from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/",
    element: <Splashpage />,
  },
  {
  path: "/About",
  element: <AboutText />,
  },
  {
  path: "/Career",
  element: <CareerText />,
  },
  {
  path: "/Contact",
  element: <ContactText />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
