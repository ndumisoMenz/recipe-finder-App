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

    const normalize = (str) =>
      str ? str.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim() : ''

    if (searchText && searchText.trim() !== "") {
      const searchTerms = normalize(searchText).split(" ").filter(term => term.length > 0)

      filtered = filtered.filter((recipe) => {
        const recipeTitle = normalize(recipe.title)
        const recipeIngredients = recipe.ingredients.map(ing => normalize(ing.name)).join(" ")
        const recipeTags = recipe.tags.map(tag => normalize(tag)).join(" ")
        const recipeDietary = recipe.dietary?.map(d => normalize(d)).join(" ") || ""

        const searchableText = `${recipeTitle} ${recipeIngredients} ${recipeTags} ${recipeDietary}`

        // Match if ALL search terms are found in the recipe data (more accurate)
        return searchTerms.every(term => searchableText.includes(term))
      })
    }

    if (tags && tags.length > 0) {
      filtered = filtered.filter((recipe) => {
        const recipeDietaryLower = (recipe.dietary || []).map(d => d.toLowerCase())

        return tags.every((tag) => {
          const tagLower = tag.toLowerCase()

          // If filtering for "vegetarian", also allow "vegan"
          if (tagLower === "vegetarian") {
            return recipeDietaryLower.includes("vegetarian") || recipeDietaryLower.includes("vegan")
          }

          return recipeDietaryLower.includes(tagLower)
        })
      })
    }

    setRecipes(filtered)
  }, [initialRecipes])


  const handleSelect = (id) => { }

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

