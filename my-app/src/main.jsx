import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Productdetails from './productdetails'
import Productlist from './productlist'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Productlist/>
  },
  {
    path: "/product-details/:id",
    element:<Productdetails/>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <RouterProvider router={router} />
  </StrictMode>
)
