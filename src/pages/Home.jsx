import { useState, useMemo } from "react"
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"

const Home = ({ recipes, onSearch, onSelect, favorites, toggleFavorite, theme }) => {
  const ITEMS_TO_SHOW = 6

  const [currentPage, setCurrentPage] = useState(1)

  const filteredRecipes = useMemo(() => recipes, [recipes])

  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_TO_SHOW)
  const startIndex = (currentPage - 1) * ITEMS_TO_SHOW
  const endIndex = startIndex + ITEMS_TO_SHOW
  const recipesToDisplay = filteredRecipes.slice(startIndex, endIndex)

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">
      <div className="relative w-full h-[60vh] min-h-[400px] my-8 rounded-[2.5rem] overflow-hidden group shadow-2xl">
        <img
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=2000"
          alt="gourmet background"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-serif font-black mb-6 leading-tight drop-shadow-2xl">
            Discover the Art of <br />
            <span className="text-orange-500 italic">Fine Dining</span>
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mb-12 font-medium opacity-90">
            Explore thousands of curated recipes for every occasion,
            crafted by chefs around the world.
          </p>

          <div className="w-full max-w-3xl transform translate-y-4">
            <SearchBar onSearch={onSearch} theme={theme} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-10">
        <h2 className={`text-3xl font-serif font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Featured <span className="text-orange-500 italic underline decoration-wavy underline-offset-8">Recipes</span>
        </h2>
        <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
          <span>{recipes.length} Results Found</span>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipesToDisplay.length > 0 ? (
          recipesToDisplay.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onSelect}
              favorite={!!favorites[recipe.id]}
              toggleFavorite={toggleFavorite}
              theme={theme}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-2xl font-serif text-gray-400 italic">No recipes found matching your search...</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-12 h-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-600 dark:text-gray-300 transition-all hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-600 shadow-sm"
          >
            <span className="sr-only">Previous</span>
            ←
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-lg font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentPage}</span>
            <span className="text-gray-400 font-bold italic">/ {totalPages}</span>
          </div>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-12 h-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-gray-600 dark:text-gray-300 transition-all hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-600 shadow-sm"
          >
            <span className="sr-only">Next</span>
            →
          </button>
        </div>
      )}
    </main>
  )
}

export default Home

