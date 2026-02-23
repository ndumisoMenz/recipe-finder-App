import { useState, useEffect, useCallback } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RecipeDetails from "./pages/RecipeDetails"
import Header from "./components/Header"
import Favorites from "./pages/Favorites"
import Footer from "./components/Footer"
import recipeData from "./recipes.json"
import SearchBar from "./components/SearchBar"

function App() {
  const initialRecipes = recipeData

 
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const favoritesRecipe = initialRecipes.filter((recipe) => favorites[recipe.id])

  
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#faf9f6"
      document.body.style.color = "#1a1a1a"
    } else {
      document.body.style.backgroundColor = "#0f1113"
      document.body.style.color = "#f0f2f5"
    }

    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  
  const [recipes, setRecipes] = useState(initialRecipes)

  
  const onSearch = useCallback(({ searchText, tags }) => {
    let filtered = initialRecipes

    if (searchText && searchText.trim() !== "") {
      const lower = searchText.toLowerCase()
      filtered = filtered.filter((r) => r.title.toLowerCase().includes(lower))
    }

    if (tags && tags.length > 0) {
      filtered = filtered.filter((recipe) =>
        tags.every((tag) =>
          recipe.dietary?.map((d) => d.toLowerCase()).includes(tag.toLowerCase())
        )
      )
    }

    setRecipes(filtered)
  }, [initialRecipes])

  
  const handleSelect = (id) => {}

  return (
    <Router>
      <Header theme={theme} setTheme={setTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              onSelect={handleSelect} 
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onSearch={onSearch} 
              theme={theme}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              theme={theme}
              onSelect={handleSelect}
              favoriteRecipes={favoritesRecipe}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetails theme={theme} recipes={initialRecipes} />}
        />
      </Routes>

      <Footer theme={theme} />
    </Router>
  )
}

export default App

