import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LuFolderCheck } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import './style.css'


const UserSidebar = ({menuControl}) => {

    const { setActiveTab} = menuControl

    return (
        <aside className='card bg-white shadow-md rounded-md sticky top-[160px]'>
            {/** User Name, Image and Email */}
            <div className='w-full p-5 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200 border-1 border-gray-300'>
                    <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBJsvhB9uNRXbwnd5kBReTmaGKi9dciJzog&s" alt="image" />
                </div>
                <h3 >Test User</h3>
                <h6 className='text-[13px] font-[500]'>useemail@gmail.com</h6>
            </div>

            {/** Account Tab-Menus */}
            <div className='bg-[#f1f1f1] myAccountTabs w-full py-3'>          
                <ul className='list-none'>
                    <li className={`link`}><button onClick={()=> setActiveTab('profile')} className='cursor-pointer'><FaRegUser className='text-[16px]'/>My Profile</button></li>
                    <li className={`link`}><button onClick={()=> setActiveTab('address')} className='cursor-pointer'><FaLocationDot className='text-[18px]'/>Address</button></li>
                    <li className={`link`}><button onClick={()=> setActiveTab('mylist')} className='cursor-pointer'><FaRegHeart className='text-[16px]'/>My List</button></li>
                    <li className={`link`}><button onClick={()=> setActiveTab('order')} className='cursor-pointer'><LuFolderCheck className='text-[18px]'/>My Orders</button></li>
                    <li className={`link`}><button className='cursor-pointer'><AiOutlineLogout className='text-[18px]'/>Logout</button></li>
                </ul>
            </div>
        </aside>
    )
}

export default UserSidebar