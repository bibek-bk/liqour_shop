
import { createBrowserRouter } from "react-router-dom"

import UserLayout from "../layouts/UserLayout"
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/users',
        element: <Products />
      },
      {
        path: '/orders',
        element: <Orders />
      }
    ]
  }
])



export default router;