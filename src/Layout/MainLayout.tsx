import { Outlet } from "react-router-dom"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

function MainLayout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout
