
import { useParams,Link } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";

const RecipeDetails = ({recipes}) => {

    
    const{id}=useParams();
    console.log('should have been able to get the id')
    const recipe=recipes.find((r)=>String(r.id)===id)

    if(!recipe){
        return <div className="p-4">Recipe not found</div>
    }

  return (
    <>
    <div className="flex justify-center">
            <Link className=' flex items-center gap-2 underline bg-gray-200 text-black px-3 py-1 rounded no-underline mb-2' to="/">
             <IoMdArrowRoundBack/> Go Home
             </Link>
      </div>
      <div className="grid w-screen gap-1.5 grid-cols-1 sm:grid-cols-2">
        <div className="transition-all duration-100 hover:scale-110 w-full sm:w-96 md:w-96 max-h-64 bg-orange-400 flex justify-end justify-self-end">
            <img className="object-cover w-full " src={recipe.image}/>
        </div>
        <div className="transition-all duration-100 hover:scale-110 w-full md:w-96 max-h-64 bg-yellow-400 flex justify-start justify-self-start flex-col">
            <h4 className="text-4xl m-1.5 text-pretty">{recipe.title}</h4>
            <div className="m-1 md:mt-7 md:ml-3 text-pretty">
                <p>Rating:{recipe.rating}</p>
                <p>Time:{recipe.timeMinutes} </p>
                <p>Servings:{recipe.servings}</p>
                <p>Difficulty:{recipe.difficulty}</p>
                <p>Tags:{recipe.tags.join(", ")}</p>
            </div>
        </div>
        <div className="transition-all duration-100 hover:scale-110 w-full md:w-96 h-auto md:min-h-96 flex-col bg-lime-600 flex justify-self-end">
            <h4 className="text-4xl m-1.5 text-pretty">Ingredients</h4>
            <div className="m-1.5 md:mt-7 md:ml-3 text-pretty justify-start">
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ing,index)=>(
                        <li key={index}>{ing.quantity} {ing.name}</li>
                    ))}
                </ul>
            </div>
            
        </div>
        <div className="transition-all duration-100 hover:scale-110 w-full md:w-96 h-auto md:min-h-96 bg-green-600">
            <h4 className="text-4xl m-1.5 text-pretty">Steps</h4>
            <ol className="list-decimal list-inside m-1 md:mt-7 md:ml-3 text-pretty">
                {recipe.steps.map((step,index)=>(
                    <li key={index}>{step}</li>
                ))}

            </ol>
        </div>
        
      </div>
      </>
  )
}

export default RecipeDetails
