import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import RecipeCard from "../components/RecipeCard"

const Favorites = ({ theme, onSelect, favoriteRecipes, favorites, toggleFavorite }) => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-[60vh]">
      <div className="mb-12 text-center">
        <h2 className={`text-4xl sm:text-6xl font-serif font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Your <span className="text-orange-500 italic">Favorites</span>
        </h2>
        <p className="text-gray-500 font-medium">The recipes you love, all in one place.</p>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteRecipes.map((favorite) => (
            <RecipeCard
              key={favorite.id}
              onSelect={onSelect}
              recipe={favorite}
              favorite={!!favorites[favorite.id]}
              toggleFavorite={toggleFavorite}
              theme={theme}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 mb-6">
            <MdFavoriteBorder size={40} />
          </div>
          <p className="text-2xl font-serif text-gray-400 italic mb-8">You haven't saved any favorites yet.</p>
          <Link to="/" className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform">
            Explore Recipes
          </Link>
        </div>
      )}
    </main>
  )
}

export default Favorites
