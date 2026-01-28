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


  return (
    <>
    <div className="relative w-full h-[40vh] my-6">
      <img className="w-full h-full object-cover rounded-2xl" src="/images/recipes.jpg" alt="background inage"/>
      <h3 className="absolute text-white flex items-center justify-center text-3xl italic sm:text-5xl text-center inset-0">Search for your favorite recipe</h3>
    </div>
    <div className="grid gap-1.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {recipesToDisplay.map((recipe)=>(<RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} favorite={!!favorites[recipe.id]} toggleFavorite={toggleFavorite}/> ))}
    </div>
      

      <div className="flex justify-center items-center gap-4 mt-6">
        <button onClick={goToPrevPage} disabled={currentPage===1} 
            className="px-3 py-1 bg-gray-200 text-gray-900 rounded disabled:opacity-50">
              Previous
        </button>
        <span className="text-gray-900">
          Page {currentPage} of {totalPages}
        </span>
        <button
            onClick={goToNextPage} disabled={currentPage==totalPages}
            className="px-3 py-1 bg-gray-200 text-gray-900 rounded disabled:opacity-50">
              Next
        </button>
      </div>
    </>
  )
}

export default Home
