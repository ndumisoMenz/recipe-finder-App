import { useEffect, useState,useRef,useMemo } from "react"

const TAG_OPTIONS = ["Vegetarian", "Vegan", "Gluten-Free","dairy-free"];

const SearchBar = ({onSearch}) => {
  
  const[maxTime,setMaxTime]=useState("")
  const[tags,setTags]=useState([])

  const handleTagClick=(tag)=>{
    setTags((prev)=>prev.includes(tag) ? prev.filter((t)=>t !==tag):[...prev,tag]);
  };
  

  useEffect(()=>{
  console.log('I am running')
   onSearch({maxTime,tags,})
   
  },[maxTime,tags])


  const resetFilters=()=>{
    setMaxTime("");
    setTags([])
    onSearch({maxtime:"",tags:[]})
  }



  return (
    <>
    <div className="bg-transparent rounded-xl p-3 m-auto max-w-4xl">
      <div className="flex items-center border border-gray-600 border-solid rounded-lg mb-5">
           <input className="border-none min-h-10 rounded-2xl outline-none text-base  flex-1" type="number" value={maxTime} onChange={(e)=>setMaxTime(e.target.value)} placeholder="max minutes"/>


      </div>
      
      <div className="flex justify-center gap-1 mb-4 flex-wrap">
      {TAG_OPTIONS.map((tag)=>(
        <button key={tag} onClick={()=>handleTagClick(tag)}
        className={`px-4 py-2 rounded-full border ${tags.includes(tag)? "bg-green-600 text-white":
          "bg-white text-black"
        }`}>
          {tag}
        </button>
      ))}
      <div className="ml-28">
       <button
          className="py-2.5 px-5 text-sm rounded-lg cursor-pointer bg-red-500 text-white"
          onClick={resetFilters}
        >
          Reset
        </button>
    </div>
    </div>

    </div>

    

    

    </>
  )
}

export default SearchBar
