import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav className="bg-black text-white flex items-center justify-between p-4">
        <ul className="flex  text-white gap-x-2">
            <li>
                <Link to="/">Home</Link>
            </li>
              <li>
                  <Link to="/recipe">Recipe</Link>
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
        <div>
              <Link to="/create-recipe">Create Recipe</Link>
        </div>
    </nav>
  )
}
export default Navbar