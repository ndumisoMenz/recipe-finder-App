import { FiSun, FiMoon } from "react-icons/fi"
import { Link, NavLink } from "react-router-dom";
import { LuCookingPot } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-300 bg-opacity-80
      light:bg-[#faf9f6]/80 dark:bg-[#0f1113]/80 border-gray-200/20 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-orange-500 rounded-xl text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
            <LuCookingPot size={24} />
          </div>
          <span className={`text-2xl font-serif font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Recipe<span className="text-orange-500">Finder</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-orange-500 
              ${isActive ? "text-orange-500" : (theme === 'dark' ? "text-gray-300" : "text-gray-600")}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-orange-500 
              ${isActive ? "text-orange-500" : (theme === 'dark' ? "text-gray-300" : "text-gray-600")}`
            }
          >
            Favorites
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 hover:scale-110
              ${theme === 'light'
                ? 'bg-gray-100 border-gray-200 text-gray-800'
                : 'bg-white/5 border-white/10 text-yellow-400'}`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <div className="md:hidden">
            {/* Mobile menu toggle would go here if needed, but for now we keep it simple */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
