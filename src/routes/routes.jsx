
import { createBrowserRouter } from "react-router-dom"

import UserLayout from "../layouts/UserLayout"
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/admin/Home";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import Users from "../pages/admin/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element:<UserLayout />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'Products',
        element: <Products />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  }
])



export default router;