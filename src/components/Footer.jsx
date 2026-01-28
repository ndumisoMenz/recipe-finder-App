import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <footer
      className={`mt-16 border-t ${
        theme === "light"
          ? "bg-[#8fbc8f] border-white/30 text-[#415376]"
          : "bg-[#353935] border-white/10 text-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm font-medium text-center sm:text-left">
          © {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex items-center gap-1 text-sm">
          Made with <MdFavorite className="text-red-500" /> for food lovers
        </div>

        {/* Right */}
        <div className="flex gap-4 text-sm font-semibold">
          <button
            onClick={() => navigate("/")}
            className="hover:underline transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/favorites")}
            className="hover:underline transition"
          >
            Favorites
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

