import { Outlet } from 'react-router'
import './App.css'
import MainLayout from './layouts/main-layout'


function App() {

  return (
    <>
        <div>
       
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}
      <MainLayout />
      <Outlet /> 
    </div>
    </>
  )
}

export default App
