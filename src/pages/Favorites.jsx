import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import RecipeCard from "../components/RecipeCard"

const Favorites = ({favoriteRecipes,favorites,toggleFavorite}) => {
  return (
    <>
    <div className="flex justify-center">
            <Link className=' flex items-center gap-2 underline bg-gray-200 text-black px-3 py-1 rounded no-underline mb-2' to="/">
             <IoMdArrowRoundBack/> Go Home
             </Link>
      </div>
      <div className="grid gap-1.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {favoriteRecipes.length> 0? (
       favoriteRecipes.map((favorite)=>(<RecipeCard key={favorite.id} recipe={favorite} favorite={!!favorites[favorite.id]} toggleFavorite={toggleFavorite}/> ))):
       (
        <p>No favorites yet.</p>
       )}
       </div>
    </>
  )
}

export default Favorites
