import Mainbar from "../../components/admin/Mainbar"
import Header from "../../components/admin/Header"
import Sidebar from "../../components/admin/Sidebar"

function Dashboard() {
  return (
    <>
      <Header />
      <div className="flex mx-2">
        <div className="w-1/6 border-4">
          <Sidebar />
        </div>
        <div className="w-5/6 border-4" >
          <Mainbar />
        </div>
      </div>
    </>
  )
}

export default Dashboard