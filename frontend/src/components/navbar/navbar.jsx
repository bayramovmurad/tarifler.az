import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-black">
        <ul className="flex p-4 text-white gap-x-2">
            <li>
                <Link to="/">Home</Link>
            </li>
              <li>
                  <Link to="/receipe">Receipe</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
              <li>
                  <Link to="/auth">Auth</Link>
              </li>
        </ul>
    </nav>
  )
}
export default Navbar