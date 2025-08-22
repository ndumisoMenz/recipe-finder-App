import RecipeCard from "../components/RecipeCard"

const Favorites = ({favoriteRecipes,favorites,toggleFavorite}) => {
  return (
    <>
        {favoriteRecipes.length> 0? (
       favoriteRecipes.map((favorite)=>(<RecipeCard key={favorite.id} recipe={favorite} favorite={!!favorites[favorite.id]} toggleFavorite={toggleFavorite}/> ))):
       (
        <p>No favorites yet.</p>
       )}
    </>
  )
}

export default Favorites
