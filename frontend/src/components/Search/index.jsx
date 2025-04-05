import React from 'react'
import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";
import './search.css'


const Search = () => {
  return (

        <div className='relative w-full bg-gray-100 rounded-[5px] p-2'>
            <input className='outline-none w-[100%] p-2' type="text" placeholder='Search for products...' />
            <Button className='searchbtn p-2 w-[45px] h-[45px] min-h-min[45px]' href="#"><IoSearchOutline className='text-2xl text-black'/></Button>
        </div>
  )
}

export default Search
