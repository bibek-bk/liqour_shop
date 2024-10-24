import SidebarButton from "./SidebarButton"

function Sidebar() {
  return (
    <div className="h-full">
      <div>
        <SidebarButton data={'Home'} />
        <SidebarButton data={'Products'} />
        <SidebarButton data={'Orders'} />
        <SidebarButton data={'Users'} />
        <SidebarButton data={'Sign Out'} />
      </div>
    </div>
  )
}

export default Sidebar