import { Link, Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
        <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet /> 
    </div>
    </>
  )
}

export default App
