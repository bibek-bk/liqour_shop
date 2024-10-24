import Header from "../../components/admin/Header"
import Mainbar from "../../components/admin/Mainbar"
import Sidebar from "../../components/admin/Sidebar"

function Layout() {
  return (
    <>
      <Header />
      <div className="flex mx-2 h-[90vh]">
        <div className="w-1/6 border-2">
          <Sidebar />
        </div>
        <div className="w-5/6 border-2" >
          <Mainbar />
        </div>
      </div>
    </>
  )
}

export default Layout