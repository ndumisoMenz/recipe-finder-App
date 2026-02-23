import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <footer className={`mt-20 border-t ${theme === "light"
      ? "bg-white border-gray-100 text-gray-600"
      : "bg-[#0f1113] border-white/5 text-gray-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-serif font-black tracking-tight text-gray-900 dark:text-white">
              Recipe<span className="text-orange-500">Finder</span>
            </div>
            <p className="text-sm font-medium opacity-60">
              © {new Date().getFullYear()} Recipe Finder. Elevated culinary experiences.
            </p>
          </div>

          <div className="flex gap-12 font-black uppercase tracking-widest text-xs">
            <button
              onClick={() => navigate("/")}
              className="hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/favorites")}
              className="hover:text-orange-500 transition-colors"
            >
              Favorites
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold italic">
            Made with <MdFavorite className="text-red-500" /> for food lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

