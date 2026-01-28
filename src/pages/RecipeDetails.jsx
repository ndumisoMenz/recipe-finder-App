import { useParams, Link } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"

const RecipeDetails = ({ theme,recipes }) => {
  const { id } = useParams()
  const recipe = recipes.find((r) => String(r.id) === id)

  if (!recipe) {
    return <div className="p-6 text-center text-gray-500">Recipe not found</div>
  }

  return (
    <div className="w-screen px-4">
      
      <h2 className={` ${theme==='dark' && 'text-white'}  text-4xl font-bold text-center text-gray-800 mb-8`}>
        Recipe Details
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
        
        <div className="bg-orange-100 rounded-3xl overflow-hidden shadow-md 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <img
            className="w-full h-64 object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>

        <div className="bg-yellow-100 rounded-3xl p-6 shadow-md 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <h4 className="text-3xl font-semibold mb-4 text-gray-800">
            {recipe.title}
          </h4>

          <div className="space-y-1 text-gray-700 text-sm">
            <p><span className="font-medium">Rating:</span> {recipe.rating}</p>
            <p><span className="font-medium">Time:</span> {recipe.timeMinutes} min</p>
            <p><span className="font-medium">Servings:</span> {recipe.servings}</p>
            <p><span className="font-medium">Difficulty:</span> {recipe.difficulty}</p>
            <p>
              <span className="font-medium">Tags:</span>{" "}
              {recipe.tags.join(", ")}
            </p>
          </div>
        </div>

        <div className="bg-lime-100 rounded-3xl p-6 shadow-md 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">
            Ingredients
          </h4>

          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>
                {ing.quantity} {ing.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-100 rounded-3xl p-6 shadow-md 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">
            Steps
          </h4>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  )
}

export default RecipeDetails


