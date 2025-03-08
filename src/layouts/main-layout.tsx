import { Link, Outlet } from "react-router"

function MainLayout() {

  return (
    <>
        <div>
     {/* 상단 네비게이션 바 */}
      <nav className="w-full bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <img src={"./public/tami_favicon.png"} />
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
<Link to="/playground" className="hover:text-gray-300">Playground</Link> 
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4 mt-4">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default MainLayout
