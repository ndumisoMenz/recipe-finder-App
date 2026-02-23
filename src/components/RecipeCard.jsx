import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder, MdStar, MdArrowForward } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";

const RecipeCard = ({ recipe, onSelect, favorite, toggleFavorite, theme }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    onSelect(recipe);
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className={`group relative flex flex-col w-full h-full rounded-[2rem] overflow-hidden transition-all duration-500 border
      ${theme === 'dark'
        ? 'bg-white/5 border-white/10 hover:bg-white/10'
        : 'bg-white border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2'}`}>

      <div
        className="relative aspect-[4/3] overflow-hidden cursor-pointer"
        onClick={handleNavigation}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={recipe.image}
          alt={recipe.title}
        />

        <div className="absolute top-4 left-4 z-10 transition-transform group-hover:scale-110">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-white/20">
            {recipe.difficulty}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <button
            onClick={handleNavigation}
            className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            View Recipe
          </button>
        </div>
      </div>

      <div className="relative p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-amber-500">
            <MdStar className="text-xl" />
            <span className={`text-sm font-black ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{recipe.rating}</span>
          </div>

          <button
            className={`p-2 rounded-xl transition-all duration-300 hover:scale-125
              ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-red-50'}`}
            onClick={(e) => { e.stopPropagation(); toggleFavorite(recipe.id); }}
          >
            {favorite ? (
              <MdFavorite className="w-5 h-5 text-red-500" />
            ) : (
              <MdFavoriteBorder className={`w-5 h-5 ${theme === 'dark' ? 'text-white/30' : 'text-gray-300'}`} />
            )}
          </button>
        </div>

        <h3
          className={`text-2xl font-serif font-black mb-4 flex-1 cursor-pointer leading-tight line-clamp-2 transition-colors hover:text-orange-500
            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          onClick={handleNavigation}
        >
          {recipe.title}
        </h3>

        <div className="flex items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-2 text-gray-400">
            <HiOutlineClock className="text-lg" />
            <span className="text-xs font-bold uppercase tracking-wider">{recipe.timeMinutes} MINS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.slice(0, 1).map((tag, i) => (
              <span key={i} className={`px-2 py-1 text-[9px] font-black uppercase tracking-widest rounded-md
                ${theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-400'}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
