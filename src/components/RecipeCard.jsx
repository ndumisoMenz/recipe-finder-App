import { useNavigate} from "react-router-dom"
import { MdFavorite,MdFavoriteBorder,MdOutlineStar,MdFoodBank } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { useState,useEffect } from "react";

const RecipeCard = ({recipe,onSelect,favorite,toggleFavorite }) => {

  const navigate=useNavigate();

  const selectRecipe=()=>{
    onSelect(recipe)
    navigate(`/recipe/${recipe.id}`)
  }

  

  return (
    <div className="flex flex-row transition-all duration-100 hover:scale-95 border rounded-lg shadow-lg p-1 m-2.5 text-center h-auto sm:h-80 bg-neutral-100  inline-block " >
        <div className="w-2/4 h-full">
            <img className="h-full object-cover rounded-lg cursor-pointer " src={recipe.image} onClick={selectRecipe}/>  
        </div>
        <div className="w-2/4">
            <h4 className="md:mt-3 text-xl">{recipe.title}</h4>
            <div className="md:mt-7 md:ml-4 items-center">
                  <p className="flex lg:my-2 items-center space-x">Rating <MdOutlineStar className="text-yellow-500 h-5 w-5"/>: <span>{recipe.rating}</span></p>
                  <p className="flex lg:my-2 items-center space-x">Time <FaClock className="w-4 h-4"/>:{recipe.timeMinutes} min</p>
                  <p className="flex lg:my-2 items-center space-x">Difficulty <PiCookingPotFill className="h-5 w-5"/>: {recipe.difficulty}</p>
                  <p className="flex lg:my-2 items-center space-x">Tags<MdFoodBank className="h-5 w-5"/>:<span className="text-pretty">{recipe.tags.join(", ")}</span> </p>
            </div>
        </div>
        <button className="self-end" onClick={()=>toggleFavorite(recipe.id)}>
          {favorite? <MdFavorite className="w-7 h-7 text-pink-500"/>:<MdFavoriteBorder className="w-7 h-7"/>}
        </button>
    </div>
  )
}

export default RecipeCard
