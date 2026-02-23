import { useEffect, useState } from "react"

const TAG_OPTIONS = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"]

const SearchBar = ({ onSearch, theme }) => {
  const [searchText, setSearchText] = useState("")
  const [tags, setTags] = useState([])

  const handleTagClick = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  useEffect(() => {
    if (typeof onSearch === "function") {
      onSearch({ searchText, tags })
    }
  }, [searchText, tags, onSearch])

  const resetFilters = () => {
    setSearchText("")
    setTags([])
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-4 sm:p-6 shadow-2xl border border-white/20">
      <div className="relative group flex items-center bg-white rounded-2xl mb-6 shadow-inner overflow-hidden">
        <div className="pl-6 text-gray-400 group-focus-within:text-orange-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full py-4 px-4 bg-transparent outline-none text-lg text-gray-800 placeholder-gray-400 font-medium"
          placeholder="What are you craving today?..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <button onClick={() => setSearchText("")} className="pr-6 text-gray-300 hover:text-gray-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex justify-center gap-3 flex-wrap">
          {TAG_OPTIONS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 border
                ${tags.includes(tag)
                  ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <button
          className="text-white/60 hover:text-white text-sm font-black uppercase tracking-widest transition-colors flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-xl"
          onClick={resetFilters}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default SearchBar

