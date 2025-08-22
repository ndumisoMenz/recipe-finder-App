import SearchBar from "./components/SearchBar"
import Home from "./pages/Home"
import { useState,useEffect } from "react"
import RecipeDetails from "./pages/RecipeDetails";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import recipeData from "./recipes.json"

function App() {

  const initialRecipes= recipeData

  const[favorites,setFavorites]=useState(()=>{
    const saved=localStorage.getItem("favorites")
    return saved? JSON.parse(saved):{}
  })

  useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])

  const toggleFavorite=(id)=>{
    setFavorites((prev)=>({
      ...prev,
      [id]:!prev[id]
    }))
  }

  const favoritesRecipe=initialRecipes.filter((recipe)=>favorites[recipe.id])



  const[theme,setTheme]=useState(()=>{
    return localStorage.getItem("theme") ||"light"
  })

  useEffect(()=>{

    if (theme === "light") {
    document.body.style.backgroundColor = "WhiteSmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#353935";
    //document.body.style.color = "white";
  }

    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem("theme",theme)
  },[theme])

  const [recipes, setRecipes] = useState(initialRecipes);

  

  const onSearch = ({ maxTime, tags }) => {
    let filtered = initialRecipes;

  
    if (maxTime !== "" && !isNaN(maxTime)) {
      filtered = filtered.filter((recipe) => recipe.timeMinutes <= maxTime);
    }

  
    if (tags && tags.length > 0) {
      filtered = filtered.filter((recipe) =>
        tags.every((tag) =>
          recipe.dietary?.map((d) => d.toLowerCase()).includes(tag.toLowerCase())
        )
      );
    }

    setRecipes(filtered);
  };

  const[selectedRecipe,setSelectedRecipe]=useState()

  const handleSelect=(recipe)=>{
    setSelectedRecipe(recipe) 
  };
  

  return (
  <Router>
    <>
    <Header theme={theme} setTheme={setTheme}/>
    <Routes>
      <Route path='/' element={
        <>
      <SearchBar onSearch={onSearch}/>
      <div>
        <Home recipes={recipes} onSelect={handleSelect} favorites={favorites} toggleFavorite={toggleFavorite} />
      </div>
      
      </>
    }/>
    <Route path='/favorites' element={
      <div className="grid gap-1.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Favorites favoriteRecipes={favoritesRecipe} favorites={favorites} toggleFavorite={toggleFavorite}/>
      </div>
     }/>
    <Route path='/recipe/:id' element=
      {/*selectedRecipe &&*/<RecipeDetails recipes={initialRecipes}/>} 
      />
    </Routes>
    </>
  </Router>
  )
}

export default App
