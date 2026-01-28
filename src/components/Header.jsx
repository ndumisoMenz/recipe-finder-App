import {FiSun,FiMoon} from "react-icons/fi"
import { Link, NavLink } from "react-router-dom";
import { LuCookingPot } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

const Header = ({theme,setTheme,recipe}) => {
    const toggleTheme=()=>{
        setTheme(theme==='light'? 'dark':'light');
    }
  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-md mb-3 ">

      <div>
        <LuCookingPot className="inline" size={24}/> <span className="italic font-bold">Recipe Finder</span>
      </div>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold italic text-orange-700" : " italic text-gray-900"
          }
        >
          <FiHome size={24} className="inline" /> <span className={` ${theme==='dark' && 'text-white'} hidden sm:inline`}>HOME</span>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "font-bold italic text-orange-700" : " italic text-gray-900"
          }
        >
          <MdFavoriteBorder size={30} className="inline"/> 
          <span className={`${theme==='dark' && 'text-white'}  hidden sm:inline`}>FAVORITES</span>
        </NavLink>
      </nav>


            <button onClick={toggleTheme}>
                {theme==='light'? <FiMoon size={30} className="text-gray-800"/>:<FiSun size={30} className="text-yellow-300"/> }
            </button>
    </header>

  )
}

export default Header
