import {FiSun,FiMoon} from "react-icons/fi"
import { Link, NavLink } from "react-router-dom";

const Header = ({theme,setTheme,recipe}) => {
    const toggleTheme=()=>{
        setTheme(theme==='light'? 'dark':'light');
    }
  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-md mb-3 ">

      {/* Left side: Navigation */}
      <nav className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-600" : "text-gray-700"
          }
        >
          Favorites
        </NavLink>
      </nav>


            <button onClick={toggleTheme}>
                {theme==='light'? <FiMoon className="w-9 h-9 text-gray-800"/>:<FiSun className="w-9 h-9 text-yellow-300"/> }
            </button>
    </header>

  )
}

export default Header
