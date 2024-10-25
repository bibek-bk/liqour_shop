import { Outlet } from "react-router-dom"
import Header from "../components/admin/Header"
import Sidebar from "../components/admin/Sidebar"

function AdminLayout() {
  return (
    <>
      <Header />
      <div className="flex mx-2 h-[90vh]">
        <div className="w-1/6 border-2">
          <Sidebar />
        </div>
        <div className="w-5/6 border-2" >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminLayout