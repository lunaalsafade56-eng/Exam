import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className=" text-white text-2xl px-6 py-4 flex justify-between bg-linear-to-r from-(--bg-color2) via-(--bg-color3) to-(--bg-color2) ">
        <div className="">
            <h1>MyApp</h1>
            </div>
        <div className="flex gap-5 items-center ">
            <Link to="/" className=" hover:text-(--main-color) ">Home</Link>
            <Link to="/about" className="hover:text-(--main-color)">About</Link>
            <Link to ="/content" className="hover:text-(--main-color)">Content</Link>
        </div>
        
    </nav>
  )
}

export default Navbar