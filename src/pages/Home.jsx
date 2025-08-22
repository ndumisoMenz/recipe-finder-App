import { useState } from "react"
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"

const Home = ({recipes,onSelect,favorites,toggleFavorite}) => {

  const [maxMinutes,setMaxMinutes]=useState(null)
  const [currentPage,setCurrentPage]=useState(1)
  const ITEMS_TO_SHOW=6

  const filteredRecipes=maxMinutes? 
          recipes.filter((recipe)=>recipe.timeMinutes<=maxMinutes):recipes

  const totalPages=Math.ceil(filteredRecipes.length/ITEMS_TO_SHOW)
  const startIndex=(currentPage-1)*ITEMS_TO_SHOW
  const endIndex=startIndex+ITEMS_TO_SHOW
  const recipesToDisplay=filteredRecipes.slice(startIndex,endIndex)

  const goToNextPage=()=>{
    if(currentPage<totalPages)setCurrentPage((prev)=>prev+1)
  }

  const goToPrevPage=()=>{
    if(currentPage>1)setCurrentPage((prev)=>prev-1)
  }

  //const recipesToDisplay=!maxMinutes ? filteredRecipes.slice(0,ITEMS_TO_SHOW):filteredRecipes

  return (
    <>
    <div className="grid gap-1.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {recipesToDisplay.map((recipe)=>(<RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} favorite={!!favorites[recipe.id]} toggleFavorite={toggleFavorite}/> ))}
    </div>
      

      <div className="flex justify-center items-center gap-4 mt-6">
        <button onClick={goToPrevPage} disabled={currentPage===1} 
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
              Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
            onClick={goToNextPage} disabled={currentPage==totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
              Next
        </button>
      </div>
    </>
  )
}

export default Home
