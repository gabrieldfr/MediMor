import { } from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import Login from './routers/Login'
import Home from './routers/Home'

function App() {

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default App