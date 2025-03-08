
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ListProduct from './pages/ListProduct/ListProduct.jsx'
import RootLayout from './pages/RootLayout.jsx'



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/shop',
        element: <ListProduct />
      },
      {
        // path: '/tv/:id',
        // element: <TVShowDetail />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
