import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder, MdStar, MdArrowForward } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";

const RecipeCard = ({ recipe, onSelect, favorite, toggleFavorite }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    onSelect(recipe);
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="group relative w-full max-w-5xl h-auto md:h-72 bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row border border-gray-100 mb-6">
      
      
      <div 
        className="relative w-full md:w-[60%] h-56 md:h-full overflow-hidden cursor-pointer"
        onClick={handleNavigation}
      >
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={recipe.image} 
          alt={recipe.title}
        />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
            {recipe.difficulty}
          </span>
        </div>
      </div>

      
      <div className="relative w-full md:w-[40%] p-6 md:p-8 flex flex-col bg-white">
        
       
        <button 
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-50 transition-colors"
          onClick={(e) => { e.stopPropagation(); toggleFavorite(recipe.id); }}
        >
          {favorite ? (
            <MdFavorite className="w-6 h-6 text-red-500" />
          ) : (
            <MdFavoriteBorder className="w-6 h-6 text-gray-300 hover:text-gray-400" />
          )}
        </button>

        
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          <MdStar className="text-lg" />
          <span className="text-sm font-bold text-gray-600">{recipe.rating}</span>
        </div>

        <h4 
          className="text-2xl font-black text-gray-900 leading-tight mb-4 cursor-pointer hover:text-orange-600 transition-colors line-clamp-2"
          onClick={handleNavigation}
        >
          {recipe.title}
        </h4>

      
        <div className="flex items-center gap-4 text-gray-400 mb-6">
          <div className="flex items-center gap-1.5">
            <HiOutlineClock className="text-lg" />
            <span className="text-sm font-semibold">{recipe.timeMinutes} mins</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {recipe.tags.slice(0, 1).map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase rounded-lg">
                {tag}
              </span>
            ))}
          </div>

        
          <button 
            onClick={handleNavigation}
            className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-2xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:bg-orange-600 hover:shadow-orange-300 transition-all duration-300 transform group-hover:scale-110"
            title="View Recipe"
          >
            <MdArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
