import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="bg-[var(--main-color)] text-white text-2xl px-6 py-4 flex justify-between ">
        <div className="">
            <h1>MyApp</h1>
            </div>
        <div className="flex gap-5 items-center ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to ="/content">Content</Link>
        </div>
        
    </nav>
  )
}

export default Navbar