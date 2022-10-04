import { SearchIcon } from "@heroicons/react/outline"
import Image from "next/image";
import { useState } from "react";
import News from "./News";

const Widget = ({newsResults , randomUser}) => {
    const [artNumber , setArtNumber] = useState(3)
    const [users , setUsers] = useState(3)
    console.log(newsResults[1]);
  return (
    <div className="xl:w-[600px] hidden lg:inline space-y-5 ml-8">
      <div className="w-[90%] xl:w-[75] sticky top-0 bg-white py-1.5
      z-50" >
        <div className="flex items-center p-3 rounded-full relative">
            <SearchIcon className="h-5 z-50 text-gray-500 ml-2" />
            <input type="text" placeholder="Search Twiter"
            className="absolute instet-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg bg-gray-100 focus:bg-white" />
        </div>
      </div>

      {/* articals */}
     <div className="text-gray-700 space-y-3 bg-gray-100 
     rounded-xl pt-2 w-[93%] xl:w-[85%]">
        <h4 className="font-bold text-xl px-4">what happening</h4>

      {newsResults.slice(0,artNumber).map((art) => (
        <News key={art.title}  articale={art} />
      ))
      }
      <button className="text-blue-300 pl-4 pb-3
      hover:text-blue-400" onClick={() => setArtNumber(artNumber + 3)} >show more</button>
     </div>
      
      {/* follow section */}
     <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 
     rounded-xl pt-2 w-[93%] xl:w-[85%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {randomUser.slice(0,users).map((user) => (
         <div key={user.login.username} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
            <img src={user.picture.thumbnail} alt="/"
             className='rounded-full'
            width='40' height='30' />

            <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[14px] truncate">{user.login.username}</h4>
                <h5 className="text-[13px] text-gray-500 truncate">{user.name.first + " " + user.name.last}</h5>
            </div>
            <button className="ml-auto bg-sky-500 text-white rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
            
         </div>
      ))
      }
        <button className="text-blue-300 pl-4 pb-3
      hover:text-blue-400" onClick={() => setUsers(users + 3)}>Show more</button>
     </div>

      
    </div>
  )
}

export default Widget
