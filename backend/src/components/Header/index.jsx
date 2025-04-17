import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import { CiLight } from "react-icons/ci";



const Header = () => {
  return (
    <div className='border-b-[0.1px] border-gray-800 w-[100%] px-4'>
      <div className='flex w-full p-3 justify-between'>

        {/** left */}
        <div className='flex gap-5'>
          <Button variant="outlined">
            <HiMenuAlt1 className='text-xl text-gray-400'/>
          </Button>
          {/** Search Bar */}
          <div className='searchbox'>
            <div className='w-full bg-gray-800 rounded-[5px] p-2'>
              <Button className='searchbtn' href="#"><IoSearchOutline className='text-2xl text-gray-600'/></Button>
              <input className='outline-none text-gray-400 w-[350px]' type="text" placeholder='Search for products...' />
            </div>
          </div>
        </div>

        {/** right */}
        <div className='text-white flex items-center'>
          <Button>
            <CiLight className='text-2xl text-white'/>
          </Button>
          <Button>
            <Badge badgeContent={1} color="error">
              <IoMdNotificationsOutline className='text-2xl text-white' />
            </Badge>
          </Button>

          {/** User Photo */}
          <Button>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header;