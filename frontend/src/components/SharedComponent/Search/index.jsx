import React, { useState } from 'react'
import { IoIosSearch , IoMdClose } from "react-icons/io";


const Search = () => {

  const [ searchClose, setSearchClose ] = useState('')

  return (
    <div className='searchbar w-full relative'>
        <input value={searchClose} onChange={(e)=>(setSearchClose(e.target.value))} className='outline-none border-1 border-gray-300 rounded-[5px] w-full p-2 md:p-3.5' type="text" placeholder='Search for products...' />
        <button className='searchbtn absolute top-[50%] translate-y-[-50%] right-1 md:right-4 cursor-pointer link hoverEffect' href="#">
            {
            !searchClose ? <IoIosSearch  className='text-2xl text-gray-500 link hoverEffect'/> : <IoMdClose onClick={()=>(setSearchClose(''))} className='text-2xl text-gray-500 link hoverEffect'/>
            }
        </button>
    </div>
  )
}

export default Search
