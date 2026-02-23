import { useParams, Link } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io"
import { MdStar } from "react-icons/md"

const RecipeDetails = ({ theme, recipes }) => {
  const { id } = useParams()
  const recipe = recipes.find((r) => String(r.id) === String(id))

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h2 className="text-4xl font-serif font-black text-gray-400 mb-4">Recipe not found</h2>
          <Link to="/" className="text-orange-500 font-bold uppercase tracking-widest hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen pb-20 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-500 hover:text-orange-500 transition-colors mb-12"
        >
          <div className="p-2 rounded-full bg-gray-100 dark:bg-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all">
            <IoMdArrowRoundBack size={20} />
          </div>
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Sticky Image */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
              <img
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="absolute top-6 left-6 flex gap-2">
                {recipe.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <MdStar className="text-2xl" />
                  <span className="text-lg font-black">{recipe.rating}</span>
                </div>
                <span className="text-gray-400 font-bold">|</span>
                <span className="px-4 py-1 bg-orange-500/10 text-orange-500 text-xs font-black uppercase tracking-widest rounded-full">
                  {recipe.difficulty}
                </span>
              </div>

              <h1 className={`text-4xl sm:text-6xl font-serif font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {recipe.title}
              </h1>

              <div className="grid grid-cols-3 gap-4 border-y border-gray-100 dark:border-white/5 py-8 mb-12">
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Time</p>
                  <p className="text-lg font-black">{recipe.timeMinutes} MIN</p>
                </div>
                <div className="text-center border-x border-gray-100 dark:border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Servings</p>
                  <p className="text-lg font-black">{recipe.servings}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Cuisine</p>
                  <p className="text-lg font-black italic">{recipe.cuisine || "Recipe"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <section>
                <h3 className={`text-2xl font-serif font-black mb-6 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Ingredients
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-orange-500/20 transition-all">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-sm font-medium">
                        <span className="font-black text-orange-500 mr-2">{ing.quantity}</span>
                        {ing.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className={`text-2xl font-serif font-black mb-8 flex items-center gap-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Preparation
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
                </h3>
                <div className="space-y-8">
                  {recipe.steps.map((step, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-xs group-hover:bg-orange-500 transition-colors">
                        {i + 1}
                      </div>
                      <p className="text-base leading-relaxed font-medium pt-2">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails



