import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import RecipeCard from "../components/RecipeCard"

const Favorites = ({theme,onSelect,favoriteRecipes,favorites,toggleFavorite}) => {
  return (
    <>
      <h2 className={`${theme==='dark' && 'text-white'}   text-4xl font-bold text-center text-gray-800 mb-8`}>
        Favorites
      </h2>
      <div className="grid gap-1.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {favoriteRecipes.length> 0? (
       favoriteRecipes.map((favorite)=>(<RecipeCard key={favorite.id} onSelect={onSelect} recipe={favorite} favorite={!!favorites[favorite.id]} toggleFavorite={toggleFavorite}/> ))):
       (
        <p>No favorites yet.</p>
       )}
       </div>
    </>
  )
}

export default Favorites
